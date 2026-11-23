__d(
  "WAAbPropsToUI",
  ["WAAbPropsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "client_group_participants_limit",
      "client_group_name_length_limit",
    ];
    function s(t) {
      var n = t != null ? t : {},
        r = {
          client_group_participants_limit: 0,
          client_group_name_length_limit: 0,
        };
      return (
        e.forEach(function (e) {
          n[e] != null
            ? (r[e] = n[e])
            : (r[e] = o("WAAbPropsTypes").ABPropConfigs[e][2]);
        }),
        r
      );
    }
    l.prepareAbPropsForUI = s;
  },
  98,
);
