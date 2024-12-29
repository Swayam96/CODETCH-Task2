import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import Style from "../Css/Makeup.module.css";

function Pagination({
    currentPage,
    totalPages,
    handlePageChange
}) {
    function createArrayofSize(n) {
        return new Array(n).fill(0);
      }  

    

   const prev =(
    <Button colorScheme='black' variant='outline' bg="white" color="black" disabled={currentPage===1} onClick={()=>handlePageChange(currentPage-1)}>Prev</Button>) 
    const current = createArrayofSize(totalPages).map((a, i) => (
        <Button color="black" onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
        {i + 1}
        </Button>
      ))
   const next =(
   <Button colorScheme='black' variant='outline' className={Style.button-4}  bg="white" color="black" disabled={currentPage===totalPages} onClick={()=>handlePageChange(currentPage+1)}>Next</Button>
   )
  
 return (
        <HStack>
          {prev}
          {current}
          {next}
        </HStack>
   
)
}
export default Pagination;