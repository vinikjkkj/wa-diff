__d(
  "WAWebCommunityAdminSelfDemotePopup.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebCommunityTransferOwnershipFlowLoadable.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onCancel,
        r = e.onDemote,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Dismiss yourself as community admin?")),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(
            /*BTDS*/ "You won't be able to send announcements, manage the community or use other admin tools.",
          )),
          (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = c.jsx("div", { className: "x1jchvi3 x1xet1wb", children: d })),
          (t[2] = m))
        : (m = t[2]);
      var p;
      return (
        t[3] !== n || t[4] !== r || t[5] !== a
          ? ((p = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              ref: a,
              title: l,
              onOK: r,
              onCancel: n,
              children: m,
            })),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.handleDismissModal,
        r = e.parentGroupChat,
        a = e.ref;
      if (r != null) {
        var i;
        t[0] !== n || t[1] !== r
          ? ((i = function () {
              (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                c.jsx(
                  o("WAWebCommunityTransferOwnershipFlowLoadable.react")
                    .CommunityTransferOwnershipFlowLoadable,
                  {
                    parentGroupChat: r,
                    onEnd: function () {
                      return o("WAWebCmd").Cmd.openCommunityTabbedInfo(r.id);
                    },
                  },
                ),
                {
                  transition: "flow-transition-drawer-push",
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ),
                n());
            }),
            (t[0] = n),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]);
        var l = i,
          u;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Assign new owner")), (t[3] = u))
          : (u = t[3]);
        var d;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = c.jsx("div", {
              className: "x1jchvi3 x1xet1wb",
              children: s._(
                /*BTDS*/ "As the owner, you'll need to assign a new owner to dismiss yourself as an admin.",
              ),
            })),
            (t[4] = d))
          : (d = t[4]);
        var m;
        return (
          t[5] !== n || t[6] !== l || t[7] !== a
            ? ((m = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                testid: void 0,
                ref: a,
                onOK: l,
                okText: u,
                onCancel: n,
                children: d,
              })),
              (t[5] = n),
              (t[6] = l),
              (t[7] = a),
              (t[8] = m))
            : (m = t[8]),
          m
        );
      }
      var p;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx("div", {
            className: "x1jchvi3 x1xet1wb",
            children: s._(
              /*BTDS*/ "You cannot dismiss yourself as an admin because you created the community.",
            ),
          })),
          (t[9] = p))
        : (p = t[9]);
      var _;
      return (
        t[10] !== n || t[11] !== a
          ? ((_ = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              ref: a,
              onOK: n,
              children: p,
            })),
            (t[10] = n),
            (t[11] = a),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(11),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.isCommunitySuperAdmin,
        s = i.onCancel,
        u = i.onDemote,
        p = i.onFailure,
        _ = i.parentGroupChat,
        f = l === void 0 ? !1 : l;
      if (f) {
        var g;
        return (
          n[3] !== p || n[4] !== _ || n[5] !== a
            ? ((g = c.jsx(m, {
                ref: a,
                handleDismissModal: p,
                parentGroupChat: _,
              })),
              (n[3] = p),
              (n[4] = _),
              (n[5] = a),
              (n[6] = g))
            : (g = n[6]),
          g
        );
      }
      var h;
      return (
        n[7] !== s || n[8] !== u || n[9] !== a
          ? ((h = c.jsx(d, { ref: a, onDemote: u, onCancel: s })),
            (n[7] = s),
            (n[8] = u),
            (n[9] = a),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    l.default = p;
  },
  226,
);
