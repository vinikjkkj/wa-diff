__d(
  "buildAdsQuickCreateMAIBAPromptBuilderSegments",
  ["AdsQuickCreateMAIBAContextChipsStrings", "MAIBAContextAssetTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["CAMPAIGN", "FACEBOOK_PAGE", "DATASET", "WEBSITE", "CATALOG"],
      s = 400,
      u = 512,
      c = 3,
      d = /^[1-9][0-9]{0,18}$/,
      m = "9223372036854775807",
      p =
        /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{2,63}|xn--[a-z0-9-]{1,59})$/,
      _ = 253;
    function f(e) {
      return Array.from(e).length;
    }
    function g(e) {
      return d.test(e) && (e.length < m.length || e <= m);
    }
    function h(e) {
      return e.length <= _ && !e.startsWith("www.") && p.test(e);
    }
    function y(e, t) {
      return e === "WEBSITE"
        ? h(t.entity_id) && t.display_name === t.entity_id
        : g(t.entity_id);
    }
    function C(t) {
      var n = e.find(function (e) {
        return e === t.entity_type;
      });
      if (
        n == null ||
        o("MAIBAContextAssetTypes").MAIBA_CONTEXT_CHIP_SENDABLE[n] !== !0 ||
        !y(n, t)
      )
        return null;
      var r = t.display_name.trim();
      if (r === "" || f(r) > s) return null;
      var a = String(
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_ASSET_TYPE_META[n].label(),
        ),
        i = o("AdsQuickCreateMAIBAContextChipsStrings").getContextChipReference(
          a,
          r,
          o("MAIBAContextAssetTypes").getMAIBAContextChipReferenceID(
            n,
            t.entity_id,
          ),
        );
      return f(i) > u
        ? null
        : {
            display_name: r,
            entity_id: t.entity_id,
            entity_type: n,
            origin: "prompt_builder",
            type_label: a,
          };
    }
    function b(e, t) {
      var n = [];
      for (var r of t.slice(0, c)) {
        var o = r.replaced_text;
        if (o !== "") {
          var a = e.indexOf(o);
          if (!(a === -1 || e.indexOf(o, a + 1) !== -1)) {
            var i = C(r);
            i != null &&
              n.push({ chip: i, end: a + o.length, replacedText: o, start: a });
          }
        }
      }
      n.sort(function (e, t) {
        return e.start - t.start;
      });
      var l = [],
        s = [],
        u = 0;
      for (var d of n)
        d.start < u ||
          (d.start > u && l.push({ kind: "text", text: e.slice(u, d.start) }),
          l.push({ chip: d.chip, kind: "chip", replacedText: d.replacedText }),
          s.push(d.chip),
          (u = d.end));
      return (
        u < e.length && l.push({ kind: "text", text: e.slice(u) }),
        { segments: l, validChips: s }
      );
    }
    l.default = b;
  },
  98,
);
