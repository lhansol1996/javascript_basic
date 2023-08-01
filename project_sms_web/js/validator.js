//유효성 검증 객체

class Validator {
  /**
   * 문자열 입력값 .
   * @param {string} 문자열 값 
   * @returns 문자열 입력 true , false 
   */

  static hasText(value){
    if (value == undefined || value.length === 0 ){
      return false;
    }
    return true;
  }


}





export { Validator }