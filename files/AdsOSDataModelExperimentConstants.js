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
      if ((e === void 0 && (e = !0), !r("gkx")("29484"))) return "unallocated";
      var t = e
        ? r("gkx")("29487") || r("gkx")("29488")
        : r("gkx")("29489") || r("gkx")("29490");
      return t ? "hbt_test" : "hbt_control";
    }
    function m(e) {
      var t;
      if ((e === void 0 && (e = !0), e)) {
        var n;
        return (n = r("qex")._("971")) != null ? n : "unallocated";
      }
      return (t = r("qex")._("1266")) != null ? t : "unallocated";
    }
    function p() {
      var t,
        n = s[d(!1)];
      return n != null ? n : (t = e[m(!1)]) != null ? t : null;
    }
    ((l.OS_DATA_MODEL_IBT_SETTINGS = u),
      (l.OS_DATA_MODEL_HBT_SETTINGS = c),
      (l.getHBTDataModelVariation = d),
      (l.getIBTDataModelVariation = m),
      (l.genOSDataModelL4Setting = p));
  },
  98,
);
