describe('Github', function() {

  it('test todo mvc', function (client) {
    client
      .url('http://todomvc.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('TodoMVC')
      .assert.visible('a[href="examples/backbone"]');

      client.pause(500);
  });

  it('uses BDD to run the Google simple test', function(client) {
      client
        .url('http://google.com')
        .expect.element('body').to.be.present.before(1000);

      client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('#main', 'Night Watch');

      client.pause(4000);
  });

  after(function(client, done) {
    if (client.sessionId) {
      client.end(function() {
        done();
      });
    } else {
      done();
    }
  });

  afterEach(function(client, done) {
    done();
  });

  beforeEach(function(client, done) {
    done();
  });

});
