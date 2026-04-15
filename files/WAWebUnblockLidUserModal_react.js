__d(
  "WAWebUnblockLidUserModal.react",
  [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9);
      r("vulture")("Rm90vGSQDdi9zauMbkem12JDw5Y=");
      var a = e.contact,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield a.addPendingAction(
                o("WAWebBlockContactAction").unblockContact(a),
              ),
                o("WAWebModalManager").ModalManager.close());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c = d,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "Unblock contact"),
          })),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { surface: "unknown", viewName: "unblock-lid-user" }),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Unblock")), (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Cancel")), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(
            /*BTDS*/ "You cannot request or share phone number for a blocked contact. Click Unblock to request\/share phone number.",
          )),
          (t[6] = h))
        : (h = t[6]);
      var y;
      return (
        t[7] !== l
          ? ((y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: _,
              onOK: l,
              okText: f,
              onCancel: c,
              cancelText: g,
              title: p,
              children: h,
            })),
            (t[7] = l),
            (t[8] = y))
          : (y = t[8]),
        y
      );
    }
    function d() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
