__d(
  "WAWebVoipAudioDeviceListDedupe",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Set(["default", "communications"]),
      m = " - ";
    function p(t) {
      var n = new Map(),
        r = t.filter(function (e) {
          return e.deviceId !== "" && !d.has(e.deviceId);
        });
      for (var a of t)
        if (d.has(a.deviceId)) {
          var i = f(a, r);
          if (i == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AudioDeviceDedupe] no twin for ",
                  " (",
                  ", group ",
                  ") among ",
                  " devices",
                ])),
              a.deviceId,
              a.label,
              g(a),
              r.length,
            );
            continue;
          }
          var l = i.rule,
            m = i.twins;
          for (var p of m) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AudioDeviceDedupe] ",
                  " (group ",
                  ") hides ",
                  " (",
                  ", group ",
                  ") by ",
                  "",
                ])),
              a.deviceId,
              g(a),
              p.label,
              p.deviceId.slice(0, 8),
              g(p),
              l,
            );
            var h = n.get(p.deviceId);
            if (h == null) n.set(p.deviceId, a.deviceId);
            else if (h !== a.deviceId) {
              var y =
                  a.deviceId === "default" ? [a.deviceId, h] : [h, a.deviceId],
                C = y[0],
                b = y[1];
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AudioDeviceDedupe] ",
                    " folds into ",
                    ", same twin",
                  ])),
                b,
                C,
              ),
                n.set(b, C));
            }
          }
        }
      var v = new Map(),
        S = [];
      for (var R of t)
        if (!n.has(R.deviceId)) {
          var L = R.groupId;
          if (L != null && R.deviceId !== "" && !d.has(R.deviceId)) {
            var E = L + "\0" + R.label,
              k = v.get(E);
            if (k != null) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AudioDeviceDedupe] ",
                    " (",
                    ") repeats ",
                    " in group ",
                    "",
                  ])),
                R.label,
                R.deviceId.slice(0, 8),
                k.slice(0, 8),
                L.slice(0, 8),
              ),
                n.set(R.deviceId, k));
              continue;
            }
            v.set(E, R.deviceId);
          }
          S.push(R);
        }
      return {
        devices: S,
        toVisibleId: function (t) {
          return _(n, t);
        },
      };
    }
    function _(e, t) {
      for (var n = t, r = 0; r < e.size; r++) {
        var o = e.get(n);
        if (o == null) break;
        n = o;
      }
      return n;
    }
    function f(e, t) {
      var n = function (n) {
          return e.label.endsWith(m + n.label);
        },
        r =
          e.groupId == null
            ? []
            : t.filter(function (t) {
                return t.groupId === e.groupId;
              }),
        o = r.filter(n);
      if (o.length > 0) return { rule: "group+label", twins: o };
      if (r.length === 1) return { rule: "group", twins: r };
      var a = t.filter(n);
      return a.length === 1 ? { rule: "label", twins: a } : null;
    }
    function g(e) {
      return e.groupId == null ? "none" : e.groupId.slice(0, 8);
    }
    l.dedupeAudioDevices = p;
  },
  98,
);
