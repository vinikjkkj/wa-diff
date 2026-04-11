__d(
  "WAWebCommonGroupInfoDescriptionSection.react",
  [
    "WANullthrows",
    "WAWebChatInfoDescriptionSection.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebSetDescAction",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t,
        n,
        a = o("useWAWebModelValues").useModelValues(e.chat, ["groupMetadata"]),
        i = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(a.groupMetadata),
          [
            "displayedDesc",
            "groupType",
            "owner",
            "creation",
            "restrict",
            "participants",
            "support",
            "groupType",
          ],
        ),
        l = r("useWAWebEventTargetValue")(i, ["change:desc"], function () {
          return i.displayedDesc;
        }),
        c = u((t = e.focusOnMount) != null ? t : !1),
        d = c[0],
        m = c[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "edit_group_description",
        function () {
          m(!0);
        },
      );
      var p = function () {
          m(!1);
        },
        _ =
          i.owner &&
          ((n = i.participants.get(i.owner)) == null ? void 0 : n.contact),
        f = "";
      if (_ != null) {
        var g = [
          i.creation,
          o("WAWebFrontendContactGetters").getFormattedName(_),
          o("WAWebContactGetters").getIsMe(_),
        ];
        i.groupType === o("WAWebGroupType").GroupType.COMMUNITY
          ? (f = o("WAWebClock").Clock.communityCreatedByStr.apply(
              o("WAWebClock").Clock,
              g,
            ))
          : (f = o("WAWebClock").Clock.groupCreatedByStr.apply(
              o("WAWebClock").Clock,
              g,
            ));
      }
      return s.jsx(r("WAWebChatInfoDescriptionSection.react"), {
        description: l,
        chat: e.chat,
        showFullDescription: e.showFullDescription,
        editRestrictionText: e.editRestrictionText,
        testid: void 0,
        containerTestId: e.containerTestId,
        emptyValuePlaceholder: e.emptyValuePlaceholder,
        creationString: f,
        canSetDescription: i.canSetDescription(),
        setDescriptionAction: o("WAWebSetDescAction").setDesc,
        bulletPointsEnabled: !0,
        expandedFormattingEnabled: !1,
        onSave: p,
        onBlur: p,
        onCancel: p,
        setIsEditing: d,
        focusOnMount: e.focusOnMount === !0 || d,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
