export interface AgeType{
    [key:string]: boolean
    age10: boolean,
    age2030: boolean,
    age40: boolean,
}

export interface GenderType{
    [key: string]: boolean,
    male: boolean,
    female: boolean,
}

export interface BodyType{
    [key: string]: boolean,
    hot: boolean 
    normal: boolean 
    cold: boolean
}

export type CheckIconProps = {
    isClick: boolean;
}

export type ErrorWithMessage = {
    message: string
}

export interface ModalProps{
    isModal: boolean
    setIsModal: (value: boolean) => void;
}

export type IsModalType = {
    isModal: boolean
}

export interface WeatherType{
   mock:{
    time: string,
    weather: string
    degree: string
   }[] | null
   info:{
    time: string,
    weather: string
    degree: string
   }[] | null
}

export interface WeatherDataType{
    weather:{
        time: string,
        weather: string
        degree: string
        today:{
            today_weather: string
            temp: string
            pm10: string
            uv: string
        }
    }
}

export interface CardItemProps{
    src: string
    alt: string
    info: any
    item: string
}

export interface CityType{
    [key: string]: string[]
  }

export interface RadioBoxProps{
    list:string[]
    category: string
    column: boolean
    value: string[]
}

export interface FontType{
	fontSize: string;
    fontFamily: string;
    fontWeight: string;
    lineHeight: string;
}