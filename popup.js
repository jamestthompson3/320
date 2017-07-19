function notify () {
  new Notification('look 20 feet away for 20 seconds');
  }

// Test for notification support.
if (window.Notification) {

  var interval = 0; // The display interval, in minutes.

  setInterval(function() {
    interval++;
       notify();
  }, 6000);
}
