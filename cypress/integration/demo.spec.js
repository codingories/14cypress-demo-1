describe('百度', ()=>{
  it('能搜索大白菜',()=>{
    cy.visit('https://www.baidu.com')
    cy.get('input#kw').type('饥人谷')
    cy.contains('百度一下').click()
    cy.contains('饥人谷官网').should('exist')
    cy.contains('jirengu.com').should('exist')
  })
})
