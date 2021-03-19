
export default function useQuestions() {
    
    function decodeHTMLEntities(text:string) {
        var entities = [
            ['quot', '"'],
            ['#039', '\''],
            ['ocirc', 'ô'],
            ['ldquo', '"'],
            ['rdquo', '"'],
            ['epsilon', 'ε'],
            ['Phi','Φ' ],
            ['Aring', 'Å']
        ];
        for (var i = 0, max = entities.length; i < max; ++i) 
            text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
        return text;
    }


    return {decodeHTMLEntities}


}