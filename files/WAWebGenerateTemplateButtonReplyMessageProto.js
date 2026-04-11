__d(
  "WAWebGenerateTemplateButtonReplyMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return {
        templateButtonReplyMessage: {
          selectedId: n.selectedId,
          selectedIndex: n.selectedIndex,
          selectedCarouselCardIndex: n.selectedCarouselCardIndex,
          selectedDisplayText: n.body,
          contextInfo: t,
        },
      };
    }
    i.default = e;
  },
  66,
);
