__d(
  "WAWebSearchTheWebButton.react",
  [
    "WAWebDropdownItem.react",
    "WAWebModalManager",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebWamEnumStwInteraction",
    "WAWebWebSearchPopup.react",
    "WDSIconIcSearch.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.entryPoint,
        n = e.messageType,
        a = e.msg,
        i = e.stwFormat,
        l = function () {
          (o("WAWebSearchTheWebEventLogger").logSTWEvent({
            stwEntryPoint: t,
            stwFormat: i,
            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
              .ENTRY_POINT_CLICKED,
            messageType: n,
          }),
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebWebSearchPopup.react"), {
                message: a,
                entryPoint: t,
                stwFormat: i,
              }),
            ));
        };
      return s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: l,
        icon: s.jsx(r("WDSIconIcSearch.react"), {}),
        children: o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText(),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
