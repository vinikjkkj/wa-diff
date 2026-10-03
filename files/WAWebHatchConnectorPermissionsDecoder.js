__d(
  "WAWebHatchConnectorPermissionsDecoder",
  ["WALogger", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = ["allow", "ask", "deny"],
      m = ["default", "user_override"];
    function p(t) {
      var n,
        r,
        a =
          (n = o("WAWebHatchJsonReaders").readObject(t, "result")) != null
            ? n
            : t,
        i =
          (r = o("WAWebHatchJsonReaders").readObject(a, "permissions")) != null
            ? r
            : a;
      if (!o("WAWebHatchJsonReaders").isObject(i))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-connectors: permissions payload is not an object",
                ])),
            )
            .sendLogs("hatch-connectors-bad-permissions-body"),
          null
        );
      var l = o("WAWebHatchJsonReaders").readField(i, "sections");
      if (l == null) return [];
      if (!Array.isArray(l))
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-connectors: permissions payload has non-array sections",
                ])),
            )
            .sendLogs("hatch-connectors-bad-sections"),
          null
        );
      var d = { droppedMethods: 0, unusableModeOptions: 0 },
        m = [];
      for (var p of l) {
        var f = _(p, d);
        f.groups.length > 0 && m.push(f);
      }
      return (
        d.unusableModeOptions > 0 &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-connectors: unusable mode_options count=",
                  "",
                ])),
              d.unusableModeOptions,
            )
            .sendLogs("hatch-connectors-bad-mode-options"),
        d.droppedMethods > 0 &&
        (o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: dropped permission methods count=",
                "",
              ])),
            d.droppedMethods,
          )
          .sendLogs("hatch-connectors-dropped-methods"),
        m.length === 0)
          ? null
          : m
      );
    }
    function _(e, t) {
      if (!o("WAWebHatchJsonReaders").isObject(e))
        return { groups: [], label: null };
      var n = o("WAWebHatchJsonReaders").readField(e, "groups"),
        r = [];
      if (Array.isArray(n))
        for (var a of n) {
          var i = f(a, t);
          i.methods.length > 0 && r.push(i);
        }
      return {
        groups: r,
        label: o("WAWebHatchJsonReaders").readString(e, "label"),
      };
    }
    function f(e, t) {
      if (!o("WAWebHatchJsonReaders").isObject(e))
        return { label: "", methods: [] };
      var n = o("WAWebHatchJsonReaders").readField(e, "methods"),
        r = [];
      if (Array.isArray(n))
        for (var a of n) {
          var i = g(a, t);
          i == null ? t.droppedMethods++ : r.push(i);
        }
      return {
        label: o("WAWebHatchJsonReaders").readStringOrEmpty(e, "label"),
        methods: r,
      };
    }
    function g(e, t) {
      var n;
      if (!o("WAWebHatchJsonReaders").isObject(e)) return null;
      var r = o("WAWebHatchJsonReaders").readTrimmedString(e, "key");
      if (o("WAWebHatchJsonReaders").isBlankText(r)) return null;
      var a = o("WAWebHatchJsonReaders").readTrimmedString(e, "label"),
        i = h(o("WAWebHatchJsonReaders").readField(e, "mode")),
        l = o("WAWebHatchJsonReaders").readField(e, "mode_options"),
        s = d;
      if (l != null) {
        var u = C(l);
        (u.length === 0 && t.unusableModeOptions++,
          (s = u.length === 0 ? [i] : u));
      }
      return {
        key: r,
        label: o("WAWebHatchJsonReaders").isBlankText(a) ? r : a,
        mode: i,
        modeOptions: s,
        modeSource: y(o("WAWebHatchJsonReaders").readField(e, "mode_source")),
        restricted:
          (n = o("WAWebHatchJsonReaders").readBool(e, "restricted")) != null
            ? n
            : !1,
      };
    }
    function h(e) {
      var t;
      return e == null
        ? "ask"
        : (t = d.find(function (t) {
              return t === e;
            })) != null
          ? t
          : "deny";
    }
    function y(e) {
      var t;
      return (t = m.find(function (t) {
        return t === e;
      })) != null
        ? t
        : "default";
    }
    function C(e) {
      if (!Array.isArray(e)) return [];
      var t = [],
        n = function (n) {
          var e = d.find(function (e) {
            return e === n;
          });
          e != null && !t.includes(e) && t.push(e);
        };
      for (var r of e) n(r);
      return t;
    }
    function b(e) {
      return e.some(function (e) {
        return e.groups.some(function (e) {
          return e.methods.some(function (e) {
            return e.modeSource === "user_override";
          });
        });
      });
    }
    ((l.decodeHatchConnectorPermissions = p),
      (l.hasHatchConnectorUserOverrides = b));
  },
  98,
);
