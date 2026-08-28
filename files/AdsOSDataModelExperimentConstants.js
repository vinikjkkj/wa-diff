__d(
  "AdsOSDataModelExperimentConstants",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        ibt_control: "os_v2_l4_weight_ibt_control",
        ibt_a: "os_v2_l4_weight_ibt_a",
        ibt_b: "os_v2_l4_weight_ibt_b",
        ibt_c: "os_v2_l4_weight_ibt_c",
        ibt_d: "os_v2_l4_weight_ibt_d",
        ibt_e: "os_v2_l4_weight_ibt_e",
        ibt_f: "os_v2_l4_weight_ibt_f",
      },
      s = {
        hbt_control: "os_v2_l4_weight_hbt_control",
        hbt_test: "os_v2_l4_weight_hbt_test",
      },
      u = [
        "os_v2_l4_weight_ibt_control",
        "os_v2_l4_weight_ibt_a",
        "os_v2_l4_weight_ibt_b",
        "os_v2_l4_weight_ibt_c",
        "os_v2_l4_weight_ibt_d",
        "os_v2_l4_weight_ibt_e",
        "os_v2_l4_weight_ibt_f",
        "os_v2_l3_weight_ibt_control",
        "os_v2_l3_weight_ibt_a",
        "os_v2_l3_weight_ibt_b",
        "os_v2_l3_weight_ibt_c",
        "os_v2_l3_weight_ibt_d",
        "os_v2_l3_weight_ibt_e",
        "os_v2_l3_weight_ibt_f",
      ],
      c = [
        "os_v2_l4_weight_hbt_control",
        "os_v2_l4_weight_hbt_test",
        "os_v2_l3_weight_hbt_control",
        "os_v2_l3_weight_hbt_test",
      ];
    function d(e) {
      return (
        e === void 0 && (e = !0),
        e
          ? r("gkx")("8091")
            ? "hbt_test"
            : "hbt_control"
          : r("gkx")("9432")
            ? "hbt_test"
            : "hbt_control"
      );
    }
    function m(e) {
      var t;
      if ((e === void 0 && (e = !0), e)) {
        var n;
        return (n = r("qex")._("971")) != null ? n : "unallocated";
      }
      return (t = r("qex")._("1266")) != null ? t : "unallocated";
    }
    function p(e) {
      return (e === void 0 && (e = !0), d(e));
    }
    function _(e) {
      return (e === void 0 && (e = !0), m(e));
    }
    function f(t) {
      var n, r;
      t === void 0 && (t = !1);
      var o = m(t),
        a = e[o];
      if (a != null) return a;
      var i = d(t);
      return (n = (r = e[i]) != null ? r : s[i]) != null ? n : null;
    }
    ((l.OS_DATA_MODEL_IBT_SETTINGS = u),
      (l.OS_DATA_MODEL_HBT_SETTINGS = c),
      (l.getHBTDataModelVariation = d),
      (l.getIBTDataModelVariation = m),
      (l.getDataModelVariation = p),
      (l.getDataModelV5Variation = _),
      (l.genOSDataModelL4Setting = f));
  },
  98,
);
