

describe('Tricky interview challenges', () => {
  it.skip('Get player profile with most 6s', () => {
    cy.visit('https://www.cricbuzz.com/cricket-team/india/2/stats')
    var max6s = 0;
    var indexOfPlayer=0;
    cy.get('tbody>tr').each(($element,index)=>{
        const sixesElement=$element.find('td:last-child')
        cy.wrap(sixesElement).invoke('text').then((Text)=>{
            const six=parseInt(Text)
            if(six>max6s){
                max6s=six
                indexOfPlayer=index+1;
            }
            cy.log(max6s)

        });
    }).then(()=>{
        cy.get(`tbody>tr:nth-child(${indexOfPlayer})>td>a`).click()
    })
  });

  it('Extract All Dropdown Values into an Array', () => {
    cy.visit('https://www.cricbuzz.com/cricket-team/india/2/stats')
    const matchTypes=[];
    cy.get("select[ng-model='selectedMatchType']>option").each(($matchType,index)=>{
      cy.wrap($matchType).invoke('text').then((Text)=>{
        matchTypes.push(Text);
        if(Text==='ODI'){
          cy.get("select[ng-model='selectedMatchType']").select(Text);
        }
      })
    })

  it('Handling Hidden Elements With mouse hover', () => {
    cy.visit('https://www.cricbuzz.com/cricket-team/india/2/stats')
    cy.get('#teamDropDown')


  });


  
});

});