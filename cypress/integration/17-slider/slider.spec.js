// trigger('event-name')

// invoke('jQuery Method')...

// invoke('attr', 'attribute name') - get the value of an attribute
// invoke('attr', 'attribute name', 'new value for the attribute') - set the value of an attribute

describe("Slider suit", () => {
    it("Slider Test - input type=range", () => {
      cy.visit("http://127.0.0.1:5501/cypress/index4.html");
      cy.get("#rangeone").invoke("val", "72").trigger("change");
      cy.get("p#one").should("have.text", 70);
      cy.get("#rangetwo").invoke("val", "76").trigger("change");
      cy.get("p#two").should("have.text", 80);
    });
  
    it("Slider Test - Built from CSS", () => {
      cy.visit("http://127.0.0.1:5501/cypress/index3.html");
      cy.get("div#slide-2").click({ force: true });
      cy.get("div#slide-3").click({ force: true });
      cy.get('a[href="#slide-1"]').click();
      cy.url().should("include", "#slide-1");
    });
  
    it("Slider Test - http://testautomationpractice.blogspot.com/", () => {
      cy.visit("http://testautomationpractice.blogspot.com/");
      cy.get("div#slider span").invoke("attr", "style", "left: 80%;");
    });
  
  });