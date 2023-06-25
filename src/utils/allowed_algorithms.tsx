// mapping of which colour generating algorithms can be used at certain number of colours. For instance you can't generate a triadic 
// palette with 4 colours. But analogous works with all numbers so does monochromatic
export const algo_info = {
    "analogous": [2,3,4,5],
    "splitComplimentary": [3],
    "complimentary": [2],
    "monochromatic": [2,3,4,5],
    "triadic": [3],
    "quadratic": [4],
    "random": [2,3,4,5],
}


type InvertedAlgoInfo = {
    [count: number]: string[];
  };

export const algo_by_num_colours = Object.entries(algo_info).reduce(
    (acc, [algorithm, counts]) => {
      counts.forEach((count) => {
        if (!acc[count]) {
          acc[count] = [];
        }
        acc[count].push(algorithm);
      });
      return acc;
    },
    {} as InvertedAlgoInfo
  );