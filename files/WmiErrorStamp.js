__d(
  "WmiErrorStamp",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l(t, n) {
      var r;
      e.set(t, n);
      var o = t,
        a = (r = o.extra) != null ? r : {};
      return (
        (a["wmi_code:" + n.code] = "true"),
        (a["wmi_domain:" + n.domain] = "true"),
        (o.extra = a),
        o.project == null && (o.project = n.domain),
        t
      );
    }
    function s(t) {
      var n;
      return t instanceof Error && (n = e.get(t)) != null ? n : null;
    }
    ((i.stampWmiError = l), (i.getWmiErrorStamp = s));
  },
  66,
);
