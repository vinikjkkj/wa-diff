__d(
  "WAWebBizOpenOrderStatusDrawer.react",
  [
    "WAWebBizOrderStatusDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(
          o("WAWebBizOrderStatusDrawerLoadable").OrderStatusDrawerLoadable,
          {
            onClose: o("WAWebDrawerManager").closeDrawerRight,
            orderStatusButton: e,
            chat: t,
            message: n,
            openRequestTimestamp: Date.now(),
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    l.openOrderStatusDrawer = u;
  },
  98,
);
