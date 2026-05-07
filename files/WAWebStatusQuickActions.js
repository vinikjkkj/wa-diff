__d(
  "WAWebStatusQuickActions",
  [
    "fbt",
    "WAWebCreateTextStatusFlowLoadable",
    "WAWebModalManager",
    "WAWebStatusAttachMediaFlowLoadable",
    "WDSIconIcEdit.react",
    "WDSIconIcPhotoCamera.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        {
          id: "text_status",
          Icon: r("WDSIconIcEdit.react"),
          label: function () {
            return s._(/*BTDS*/ "Text status");
          },
          onClick: function () {
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(
                o("WAWebCreateTextStatusFlowLoadable")
                  .CreateTextStatusFlowLoadable,
                {},
              ),
              { transition: "status-modal" },
            );
          },
        },
        {
          id: "photo_video",
          Icon: r("WDSIconIcPhotoCamera.react"),
          label: function () {
            return s._(/*BTDS*/ "Photo and video");
          },
          onClick: function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebStatusAttachMediaFlowLoadable")
                  .StatusAttachMediaFlowLoadable,
                {},
              ),
            );
          },
        },
      ],
      d = c;
    l.default = d;
  },
  226,
);
