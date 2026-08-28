__d(
  "adsDraftEncodeFragmentValues",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.values.map(function (e) {
        return (
          (e.old_value = JSON.stringify(e.old_value)),
          (e.new_value = JSON.stringify(e.new_value)),
          e
        );
      });
      return ((e.values = t), e);
    }
    i.default = e;
  },
  66,
);
