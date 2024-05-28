describe('TCRsme1st - Testing the sme product 1st page', ()  => {
 
    beforeEach(() => {
        cy.visit('https://ms.yoors.com.au/ergo-sme/#/about?id=95140&token=491e5039-8877-406d-9d5f-0b5a2f4d327d')
        })

        it("Our business name check" , () => {
        cy.get('#OurMyBusiness').should('have.text','Our/My Business is : ') 
        })

        it("My business drop down check" , () => {
            cy.get('#myBusiness').select('3')   
        })
        
        it("View Activity button check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#viewActivities1Btn').click()   
        })
        
        it("View Activity close button check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#viewActivities1Btn').click()
            cy.get('#ViewActivities_i_').click()   
        })
        
        it("Occupation check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#aboutOccupationDesc').clear()
            cy.get('#aboutOccupationDesc').type('l23')
        })

        it("View activities drop down check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#aboutOccupationDesc').clear()
            cy.get('#aboutOccupationDesc').type('l23')
            cy.get('#viewActivityStatus').select('N')
        })

        it("period of cover check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#aboutOccupationDesc').clear()
            cy.get('#aboutOccupationDesc').type('l23')
            cy.get('#viewActivityStatus').select('N')
            cy.get('#fromDate').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Friday, May 31, 2024']").click()
        })

        it("Eligibility Criteria as follows: heading",  () => {
            cy.get('#eligibilityCriteria').should('have.text','Eligibility Criteria as follows:')
        })
        
        it("Eligibility Criteria as follows: content",  () => {
            cy.get('#applicant').should('have.text','Applicant(s) to acknowledge and declare the following in respect of the proposed insurance:')
            
        })
        it("Eligibility Criteria as follows: content",  () => {
           
            cy.get('#Abtli1').should('have.text',' If insured business and/or premise comprise of combination of Office/Retail & Services or Office/Food & Beverage, the higher tiered Plan would apply. ')
            
        })
        it("Eligibility Criteria as follows: content",  () => {
            
            cy.get('#Abtli2').should('have.text',' Total sum insured for Contents and Building below S$5m per location (Up to S$2m for Contents and S$3m for Building) ')
            
        })
        it("Eligibility Criteria as follows: content",  () => {
            
            cy.get('#Abtli3').should('have.text','Territorial limit within Singapore')
            
        })
        it("Eligibility Criteria as follows: content",  () => {
            
            cy.get('#Abtli4').should('have.text','Insured premise should:')
        })
        
        
        it("exception button" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#viewActivities1Btn').click()
            cy.get('#ViewActivities_i_').click()
            cy.get('#aboutOccupationDesc').clear()
            cy.get('#aboutOccupationDesc').type('l23')
            cy.get('#viewActivityStatus').select('N')
            cy.get('#fromDate').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Friday, May 31, 2024']").click()
            cy.get('#selectexception').select('Yes')
        })

        it("Proceed button check" , () => {
            cy.get('#myBusiness').select('3')   
            cy.get('#viewActivities1Btn').click()
            cy.get('#ViewActivities_i_').click()
            cy.get('#aboutOccupationDesc').clear()
            cy.get('#aboutOccupationDesc').type('l23')
            cy.get('#viewActivityStatus').select('N')
            cy.get('#fromDate').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Friday, May 31, 2024']").click()
            cy.get('#selectexception').select('Yes')
            cy.get('#acceptProceed').click()
        })
        it("Verify the Claims Declaration-label" , () => {
            cy.get('#ClaimsDeclaration').should('have.text','Claims Declaration')
        })
        it("Verify the Claims Declaration-date label" , () => {
            cy.get('#dateOfLoss').should('have.text','DATE OF LOSS :')
        })
        it("Verify the Claims Declaration-description label" , () => {
            cy.get('#dateOfdesc').should('have.text','DESCRIPTION OF LOSS :')
        })
        it("Verify the Claims Declaration-amount label" , () => {
            cy.get('#dateOfAmountClaim').should('have.text','AMOUNT OF CLAIM :')
        })
        it("Verify the Claims Declaration-date" , () => {
            cy.get('#dateOfLoss0').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Wednesday, May 1, 2024']").click()
        })
        it("Verify the Claims Declaration- description" , () => {
            cy.get('#dateOfLoss0').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Wednesday, May 1, 2024']").click()
            cy.get('#descriptionOfLoss0').type('TEST')
        })

        it("Verify the Claims Declaration- amount" , () => {
            cy.get('#dateOfLoss0').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Wednesday, May 1, 2024']").click()
            cy.get('#descriptionOfLoss0').type('TEST')
            cy.get('#amountOfLoss0').type('10000')
            cy.get('#acceptProceed').click()
        })
        it("Verify - SORRY YOU CANNOT PROCEED popup-name" , () => {
            cy.get('#viewActivityStatus').select('Y')
            cy.get('#name').type('Shehani')

        })
        it("Verify - SORRY YOU CANNOT PROCEED popup-email " , () => {
            cy.get('#viewActivityStatus').select('Y')
            cy.get('#email').type('lithinikakerk@gmail.com')

        })
        it("Verify - SORRY YOU CANNOT PROCEED popup-mobile " , () => {
            cy.get('#viewActivityStatus').select('Y')
            cy.get('#phone').type('45656767')

        })
        it("Verify - SORRY YOU CANNOT PROCEED popup-preferred Date " , () => {
            cy.get('#viewActivityStatus').select('Y')
            cy.get('#preferredDate').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Friday, May 31, 2024']").click()


        })
        it("Verify - SORRY YOU CANNOT PROCEED popup" , () => {
            cy.get('#viewActivityStatus').select('Y')
            cy.get('#name').type('Shehani')
            cy.get('#email').type('lithinikakerk@gmail.com')
            cy.get('#phone').type('45656767')
            cy.get('#preferredDate').click()
            cy.contains("[title='Select year']", '2024').select('2024')
            cy.contains("[title='Select month']", 'May').select('5')
            cy.get("[aria-label='Friday, May 31, 2024']").click()


        })

        
        
    })