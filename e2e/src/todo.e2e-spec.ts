import {$, $$, browser} from 'protractor';

describe('workspace-project Todo', () => {

  let input:any;
  let btn:any;
  let liste:any;

  beforeEach(() => {
    browser.get('/todo');

    // $ -> un seul élément
    input = $('app-todo input[type=text]');
    btn = $('app-todo .input-group-append > button');
    // $$ -> plusieurs éléments
    liste = $$('app-todo .list-group button');

    input.sendKeys('Task #1');
    btn.click();

    input.sendKeys('Task #2');
    btn.click();

  });

  it('Should display header title', () => {
    const h2 = $('app-todo header h2');
    expect(h2.getText()).toEqual('To do List');
  });

  it('Should list tasks', () => {
    expect(liste.get(0).getText()).toEqual('Task #1');
    expect(liste.get(0).getText()).toEqual('Task #2');
  });

  it('Supprimer une tâche', () => {
    liste.get(0).click();
    expect(liste.get(0).getText()).toEqual('Task #2');
  });

}
