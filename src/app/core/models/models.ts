export interface userData {
   id: number,
   role:string,
   name: string,
   dob:string,
   height:string,
   evaluation?: evaluation[]
}

export interface evaluation {
  behavioral: number,
  skill: number,
  education: number,
  fitToCom: number
}

