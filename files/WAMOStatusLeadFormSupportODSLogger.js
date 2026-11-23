__d(
  "WAMOStatusLeadFormSupportODSLogger",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "obc.www.all",
      u = "wamo.lead_gen.form_policy.client";
    function c(t, n) {
      var r = t === "" ? [] : t.split(","),
        a = n === "" ? [] : n.split(",");
      ((e || (e = o("ODS"))).bumpEntityKey(7110, s, u + ".evaluated"),
        a.length > 0 &&
          (e || (e = o("ODS"))).bumpEntityKey(
            7110,
            s,
            u + ".would_block_delivery",
          ));
      for (var i of r)
        (e || (e = o("ODS"))).bumpEntityKey(
          7110,
          s,
          u + ".detected_reason." + i.toLowerCase(),
        );
      for (var l of a)
        (e || (e = o("ODS"))).bumpEntityKey(
          7110,
          s,
          u + ".blocking_reason." + l.toLowerCase(),
        );
    }
    l.logWAMOStatusLeadFormSupportDisplayed = c;
  },
  98,
);
