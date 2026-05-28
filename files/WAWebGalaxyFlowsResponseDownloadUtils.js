__d(
  "WAWebGalaxyFlowsResponseDownloadUtils",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      for (var n of t)
        if (n.components != null)
          for (var r of n.components) {
            var o,
              a,
              i,
              l = n.id + "::" + ((o = r.name) != null ? o : ""),
              s =
                (a = (i = JSON.stringify(r.label)) != null ? i : r.name) != null
                  ? a
                  : "",
              u = (n.title.length > 0 ? n.title : n.id) + " - " + s;
            e.has(l) || e.set(l, u);
          }
    }
    function u(e) {
      var t = new Map([
        ["flow_id", "Flow ID"],
        ["phone_number", "Phone Number"],
        ["date_time", "Date & Time"],
      ]);
      return (e == null || s(t, e.screens), t);
    }
    function c(e, t) {
      if (e.response != null) {
        for (var n of e.response)
          if (n != null && n.components) {
            var r = n.components.find(function (e) {
              return e && e.name === t;
            });
            if (r && r.value !== void 0)
              return Array.isArray(r.value)
                ? r.value.join(", ")
                : String(r.value);
          }
      }
      return "";
    }
    function d(t) {
      var n = t.flowId,
        r = t.flowResponseMessage,
        a = t.phoneNumber,
        i = t.timestamp,
        l = null;
      if (r != null && r !== "")
        try {
          l = JSON.parse(r);
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Galaxy Response message: Failed to generate response CSV: ",
                "",
              ])),
            t,
          );
        }
      var s = u(l),
        d = [];
      d.push(Array.from(s.values()));
      var m = [];
      for (var p of s) {
        var _ = p[0],
          f = "";
        if (_ === "flow_id") f = n;
        else if (_ === "phone_number") f = a != null ? a : "";
        else if (_ === "date_time")
          f = new Date(Number(i) * 1e3).toLocaleString();
        else {
          var g = _.split("::"),
            h = g[0],
            y = g[1];
          if (!l) continue;
          f = c(l, y);
        }
        (f.includes('"') || f.includes(",") || f.includes("\n")
          ? (f = '"' + f.replace(/\"/g, '""') + '"')
          : f === ""
            ? (f = '" "')
            : (f = '"' + f + '"'),
          m.push(f));
      }
      return (
        d.push(m),
        d
          .map(function (e) {
            return e.join(",");
          })
          .join("\n")
      );
    }
    function m(e) {
      var t = /[\[\]{}|<>?\/\"\':;()+*#@$%&~`^=!\\]/g;
      return e.replace(t, "");
    }
    function p(e, t, n, r, o, a) {
      var i = m(t != null ? t : e),
        l = (i.length > 0 ? i : e) + ".csv",
        s = a(),
        u = d({
          flowId: e,
          flowResponseMessage: n,
          phoneNumber: r,
          timestamp: o,
        }),
        c = new Blob([u], { type: "text/csv;charset=utf-8;" });
      if ((s == null ? void 0 : s.download) !== void 0) {
        var p = URL.createObjectURL(c);
        (s.setAttribute("href", p),
          s.setAttribute("download", l),
          s.click(),
          s.removeAttribute("href"),
          s.removeAttribute("download"));
      }
    }
    ((l.generateCsv = d),
      (l.removeUnsupportedChars = m),
      (l.manageResponseDownload = p));
  },
  98,
);
