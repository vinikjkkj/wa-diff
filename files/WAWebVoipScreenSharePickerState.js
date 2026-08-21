__d(
  "WAWebVoipScreenSharePickerState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = 0;
    function s() {
      return e.size > 0;
    }
    function u() {
      var t = l++;
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    ((i.getIsScreenSharePickerOpen = s), (i.beginScreenSharePicker = u));
  },
  66,
);
