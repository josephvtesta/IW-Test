$.getJSON("data.json", function(data) {
  var items = [];
  $.each(data, function(key, val) {
    items.push("<div class='unit whole' id='" + key + "'>");
    items.push("<div class='title unit half'>" + key + "</div>");
    items.push("<div class='devices-data' style='width:" + val.Devices + "px'><p class='data'>" + val.Devices + "</p></div><div class='channels-data' style='width:" + val.Channels + "px'><p class='data'>" + val.Channels + "</p></div>");
    items.push("</div>");

  });

  $(items.join('')).appendTo('.content.wrap');

  $.each(data, function(key, val) {
    $("#dropdown").append("<option value='#" + key + "'>" + key + "</option>");

    $('select').change(function() {
      var url = $(this).val();
      window.location = url;

    });

  });

  var channels = 0;
  var devices = 0;
  $.each(data, function(key, val) {
    channels += parseFloat(val.Channels);
    devices += parseFloat(val.Devices);

  });

  $('.channels').append(channels);
  $('.devices').append(devices);

});
