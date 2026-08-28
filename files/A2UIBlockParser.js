__d(
  "A2UIBlockParser",
  ["A2UITreeParser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? !1 : e.includes("```a2ui") || e.includes("```json");
    }
    function s(e) {
      try {
        var t = JSON.parse(e);
        if (t != null && typeof t == "object" && !Array.isArray(t)) {
          var n = t;
          if (
            (typeof n.component == "string" &&
              typeof n.type != "string" &&
              (n.type = n.component),
            typeof n.type == "string")
          )
            return t;
        }
      } catch (e) {}
      return null;
    }
    function u(e) {
      for (
        var t = [],
          n = e
            .replace(/([^\n])(```(?:a2ui|json))/g, "$1\n$2")
            .replace(/([^\n`])(```)\s*$/gm, "$1\n$2"),
          r = n.split("\n"),
          a = 0,
          i = [],
          l = function () {
            if (i.length > 0) {
              var e = i.join("\n").trim();
              (e !== "" && t.push({ content: e, kind: "text" }), (i = []));
            }
          };
        a < r.length;
      ) {
        var u = r[a];
        if (u.startsWith("```a2ui") || u.startsWith("```json") || u === "```") {
          var c,
            d = u.slice(3).trim(),
            m = [];
          for (a++; a < r.length && !r[a].startsWith("```"); )
            (m.push(r[a]), a++);
          a++;
          var p = m.join("\n");
          if (d === "a2ui" || d === "json" || d === "") {
            var _ = o("A2UITreeParser").parseA2UITree(p);
            if (_ != null) {
              (l(), t.push({ kind: "tree", state: _ }));
              continue;
            }
            var f = s(p);
            if (f != null) {
              (l(), t.push({ data: f, kind: "a2ui" }));
              continue;
            }
          }
          (i.push("```" + d), (c = i).push.apply(c, m), i.push("```"));
          continue;
        }
        var g = u.trim();
        if (g.startsWith("{") && g.endsWith("}") && g.length > 10) {
          var h = s(g);
          if (h != null) {
            (l(), t.push({ data: h, kind: "a2ui" }), a++);
            continue;
          }
        }
        (i.push(u), a++);
      }
      return (l(), t);
    }
    function c(t) {
      return t == null || !e(t)
        ? !1
        : u(t).some(function (e) {
            return e.kind === "tree";
          });
    }
    ((l.hasA2UIBlocks = e),
      (l.parseA2UI = s),
      (l.parseA2UIBlocks = u),
      (l.hasA2UITreeBlock = c));
  },
  98,
);
