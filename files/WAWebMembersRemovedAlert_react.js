__d(
  "WAWebMembersRemovedAlert.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebLinkJoinedMembersUtils",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        r = e.groupMetadata,
        a = e.messageTimestamp,
        i;
      t[0] !== n || t[1] !== r
        ? ((i = function () {
            o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(n, r);
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c = d,
        m;
      t[3] !== a
        ? ((m =
            a != null
              ? (function () {
                  var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(
                      a,
                    ),
                    t = e.endTime,
                    n = e.startTime;
                  return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(
                    n,
                    t,
                  );
                })()
              : null),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _,
        f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { surface: "unknown", viewName: "members-removed-alert" }),
          (f = s._(/*BTDS*/ "Members removed")),
          (t[5] = _),
          (t[6] = f))
        : ((_ = t[5]), (f = t[6]));
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Manage link permissions")), (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Cancel")), (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== p
        ? ((y =
            p != null
              ? s._(
                  /*BTDS*/ "All members who joined using a group link on {timeRange} were removed by an admin.",
                  [s._param("timeRange", p)],
                )
              : s._(
                  /*BTDS*/ "All members who joined using a group link were removed by an admin.",
                )),
          (t[9] = p),
          (t[10] = y))
        : (y = t[10]);
      var C;
      return (
        t[11] !== l || t[12] !== y
          ? ((C = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: _,
              title: f,
              onOK: l,
              okText: g,
              onCancel: c,
              cancelText: h,
              children: y,
            })),
            (t[11] = l),
            (t[12] = y),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    function m(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(c, { chat: e, groupMetadata: t, messageTimestamp: n }),
      );
    }
    l.openMembersRemovedAlert = m;
  },
  226,
);
