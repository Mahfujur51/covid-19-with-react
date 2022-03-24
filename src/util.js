export const sortData=(data)=>{
    const sortedData=[...data];
    sortedData.sort((a,b) =>
     (a.cases > b.cases) ? -1 : ((b.cases > a.cases) ? 1 : 0));
     return sortedData;
}