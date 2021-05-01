import  AsyncSotrage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns'

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[],
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification: Date;
}

interface StoragePlantProps {
    [ id: string ]: {
        data: PlantProps;
    }
}

export async function savePlant(plant: PlantProps): Promise<void> {
    try {
        const data = await AsyncSotrage.getItem('@plantmanager:plants');
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        await  AsyncSotrage.setItem('@plantmanager:plants', JSON.stringify({
            ...newPlant,
            ...oldPlants,
        }));
        
    } catch(err) {
        throw new Error(err)
    }
}

export async function loadPlant(): Promise<PlantProps[]> {
    try {
        const data = await AsyncSotrage.getItem('@plantmanager:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

       const plantsSort = Object
       .keys(plants)
       .map((plant) => {
           return {
               ...plants[plant].data,
               hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
           }
       })
       .sort((a, b) => 
           Math.floor(
               new Date(a.dateTimeNotification).getTime() / 1000 -
               Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
           )
       )

       return plantsSort;
        
    } catch(err) {
        throw new Error(err)
    }
}

