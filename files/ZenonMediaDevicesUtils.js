__d(
  "ZenonMediaDevicesUtils",
  [
    "Promise",
    "RpWebBlockedVirtualAudioDevicesConfig",
    "ZenonMediaActionLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "default";
    function u() {
      if (
        navigator.mediaDevices != null &&
        typeof navigator.mediaDevices.enumerateDevices == "function"
      ) {
        var t = (e || (e = n("Promise"))).resolve(
          navigator.mediaDevices.enumerateDevices(),
        );
        return f(t).then(function (e) {
          return (
            r("ZenonMediaActionLogger").logCheckpoint(
              "enumerateDevices - navigator.mediaDevices " + JSON.stringify(e),
            ),
            e
          );
        });
      }
      return (e || (e = n("Promise"))).reject(
        r("err")("enumerateDevices() not supported"),
      );
    }
    function c(e) {
      var t = e.find(function (e) {
          return e.id === s;
        }),
        n = t != null && t.groupId !== "" && t.label !== "";
      return n
        ? e.filter(function (e) {
            return !(
              (t == null ? void 0 : t.groupId) === e.groupId &&
              (t == null ? void 0 : t.id) !== e.id &&
              t != null &&
              t.label.includes(e.label)
            );
          })
        : e;
    }
    function d(e, t) {
      var n,
        r,
        o = [],
        a =
          (n = e.find(function (e) {
            return e.id === t;
          })) != null
            ? n
            : null;
      a != null && o.push(a);
      var i =
        (r = e.find(function (e) {
          return e.id === s && e.id !== t;
        })) != null
          ? r
          : null;
      i != null && o.push(i);
      var l = e
        .filter(function (e) {
          return e.id !== s && e.id !== t;
        })
        .sort(function (e, t) {
          return e.label > t.label ? 1 : -1;
        });
      return (o.push.apply(o, l), o);
    }
    function m(e, t) {
      var n,
        r,
        o = [],
        a =
          (n = e.find(function (e) {
            return e.id === t;
          })) != null
            ? n
            : null;
      a != null && o.push(a);
      var i =
        (r = e.find(function (e) {
          return e.label.includes("Built-in") && e.id !== t;
        })) != null
          ? r
          : null;
      i != null && o.push(i);
      var l = e
        .filter(function (e) {
          return e.id !== (i == null ? void 0 : i.id) && e.id !== t;
        })
        .sort(function (e, t) {
          return e.label > t.label ? 1 : -1;
        });
      return (o.push.apply(o, l), o);
    }
    function p(e, t) {
      var n,
        r,
        o =
          (n = e.find(function (e) {
            return e.id === s;
          })) != null
            ? n
            : null,
        a =
          (r = e.find(function (e) {
            return e.id === t;
          })) != null
            ? r
            : null;
      return t != null &&
        o != null &&
        a != null &&
        (o == null ? void 0 : o.groupId) === (a == null ? void 0 : a.groupId) &&
        (o == null ? void 0 : o.id) !== (a == null ? void 0 : a.id) &&
        o != null &&
        o.label.includes(a == null ? void 0 : a.label)
        ? o == null
          ? void 0
          : o.id
        : t;
    }
    function _(e, t, n) {
      return e.filter(function (e) {
        return (
          e.id === s ||
          (t != null && t !== "" && e.id === t) ||
          (n != null && n !== "" && e.id === n) ||
          !o("RpWebBlockedVirtualAudioDevicesConfig").blockedDevices.includes(
            e.label,
          )
        );
      });
    }
    function f(e) {
      return e.then(function (e) {
        return e.map(function (e) {
          var t = e.deviceId,
            n = e.groupId,
            r = e.kind,
            o = e.label;
          return { groupId: n, id: t, kind: r, label: o };
        });
      });
    }
    ((l.CHROMIUM_BROWSER_DEFAULT_ID = s),
      (l.enumerateDevices = u),
      (l.filterDuplicateDefaultDevices = c),
      (l.sortAudioDevices = d),
      (l.sortVideoDevices = m),
      (l.updateSelectedDeviceWhenMatchesWithDefault = p),
      (l.filterVirtualAudioDevices = _));
  },
  98,
);
