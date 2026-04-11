__d(
  "WAWebResumeButterbar.react",
  [
    "fbt",
    "WAShiftTimer",
    "WAWeb-moment",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState;
    function _() {
      "use no forget";
      var e = p(!1),
        t = e[0],
        n = e[1],
        a = p(!1),
        i = a[0],
        l = a[1],
        c = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        _ = m(
          function () {
            return new (o("WAShiftTimer").ShiftTimer)(function () {
              (n(!0), l(!0));
            });
          },
          [n, l],
        ),
        f = m(
          function () {
            return new (o("WAShiftTimer").ShiftTimer)(function () {
              c();
            });
          },
          [c],
        );
      d(function () {
        return (
          _.onOrBefore(3e3),
          function () {
            (_.cancel(), f.cancel());
          }
        );
      }, []);
      var g = function () {
        (f.cancel(), _.onOrBefore(3e3), n(!1));
      };
      o("useWAWebListener").useListener(
        o("WAWebSocketModel").Socket,
        "change:state",
        g,
      );
      var h;
      if (
        o("WAWebStreamModel").Stream.displayInfo ===
        o("WAWebStreamModel").StreamInfo.OPENING
      )
        h = s._(/*BTDS*/ "Connecting to WhatsApp");
      else if (
        o("WAWebStreamModel").Stream.displayInfo ===
        o("WAWebStreamModel").StreamInfo.CONNECTING
      )
        h = s._(/*BTDS*/ "Connecting");
      else return null;
      var y = function () {
        (o("WAWebSocketModel").Socket.reconnect(), g());
      };
      if (t) {
        f.onOrAfter(1e3);
        var C = o("WAWebSocketModel").Socket.retryTimestamp - Date.now(),
          b;
        if (isNaN(C) || C < 1) b = s._(/*BTDS*/ "Retrying\u2026");
        else if (C < 6e4) {
          var v = Math.ceil(C / 1e3);
          b = s._(
            /*BTDS*/ '_j{"*":"Retrying in {number} seconds\\u2026","_1":"Retrying in 1 second\\u2026"}',
            [s._plural(v, "number")],
          );
        } else
          b = s._(/*BTDS*/ "Retrying in {duration}\u2026", [
            s._param("duration", r("WAWeb-moment").duration(C).humanize()),
          ]);
        return u.jsx("div", {
          className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
          children: u.jsx(r("WDSBanner.react"), {
            type: "warning",
            title: h,
            body: b,
            actionText: s._(/*BTDS*/ "Retry now"),
            onAction: function () {
              (new (o(
                "WAWebWebcButterbarEventWamEvent",
              ).WebcButterbarEventWamEvent)({
                webcButterbarType: o("WAWebWamEnumWebcButterbarBbType")
                  .WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING,
                webcButterbarAction: o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
              }).commit(),
                y());
            },
          }),
        });
      } else if (i)
        return u.jsx("div", {
          className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
          children: u.jsx(r("WDSBanner.react"), {
            type: "warning",
            title: h,
            body: s._(/*BTDS*/ "Retrying\u2026"),
          }),
        });
      return u.jsx("div", {
        className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
        children: u.jsx(r("WDSBanner.react"), { type: "warning", body: h }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
