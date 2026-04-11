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
    function d(t, n, r, a) {
      var i = null;
      if (n != null && n !== "")
        try {
          i = JSON.parse(n);
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
      var l = u(i),
        s = [];
      s.push(Array.from(l.values()));
      var d = [];
      for (var m of l) {
        var p = m[0],
          _ = "";
        if (p === "flow_id") _ = t;
        else if (p === "phone_number") _ = r != null ? r : "";
        else if (p === "date_time")
          _ = new Date(Number(a) * 1e3).toLocaleString();
        else {
          var f = p.split("::"),
            g = f[0],
            h = f[1];
          if (!i) continue;
          _ = c(i, h);
        }
        (_.includes('"') || _.includes(",") || _.includes("\n")
          ? (_ = '"' + _.replace(/\"/g, '""') + '"')
          : _ === ""
            ? (_ = '" "')
            : (_ = '"' + _ + '"'),
          d.push(_));
      }
      return (
        s.push(d),
        s
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
    var p = function (t, n, r, o, a, i) {
      var e = m(n != null ? n : t),
        l = (e.length > 0 ? e : t) + ".csv",
        s = i(),
        u = d(t, r, o, a),
        c = new Blob([u], { type: "text/csv;charset=utf-8;" });
      if ((s == null ? void 0 : s.download) !== void 0) {
        var p = URL.createObjectURL(c);
        (s.setAttribute("href", p),
          s.setAttribute("download", l),
          s.click(),
          s.removeAttribute("href"),
          s.removeAttribute("download"));
      }
    };
    ((l.generateCsv = d),
      (l.removeUnsupportedChars = m),
      (l.manageResponseDownload = p));
  },
  98,
);
