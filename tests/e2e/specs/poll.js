const mockQuestion = 'What are you having for dinner?';
const mockFirstAnswer = 'Rice and Beans';
const mockSecondAnswer = 'Bread and cheese';

describe('Poll', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be to create a Poll', () => {
    createPoll();
    cy.get('[data-test="question-form-question-input"]').should('have.value', mockQuestion);
    cy.get('[data-test="question-form-answer-input-0"]').should('have.value', mockFirstAnswer);
    cy.get('[data-test="question-form-answer-input-1"]').should('have.value', mockSecondAnswer);
  });

  it('should be to able to vote', () => {
    createPoll();
    vote();
  });

  it('should count votes', () => {
    createPoll();
    vote();
    vote();
    cy.get('[data-test="total-votes-total"]').should('have.text', ' Total votes: 2');
  });
});

function createQuestion () {
  cy.get('[data-test="question-form-question-input"]').type(mockQuestion);
}

function addAnswers () {
  cy.get('[data-test="question-form-new-answer-input"]').type(mockFirstAnswer);
  cy.get('[data-test="question-form-add-new-answer-btn"]').click();
  cy.get('[data-test="question-form-new-answer-input"]').type(mockSecondAnswer);
  cy.get('[data-test="question-form-add-new-answer-btn"]').click();
}

function createPoll () {
  createQuestion();
  addAnswers();
}

function vote () {
  cy.get('[data-test="poll-radio-button-Rice and Beans-input"]').click();
  cy.get('[data-test="poll-vote-btn"]').click();
}
