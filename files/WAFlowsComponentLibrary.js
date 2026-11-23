__d(
  "WAFlowsComponentLibrary",
  [
    "invariant",
    "JSResource",
    "WAFlowsCalendarPicker.react",
    "WAFlowsCheckboxGroup.react",
    "WAFlowsChipsSelector.react",
    "WAFlowsComponentToVersion.react",
    "WAFlowsDocumentPicker.react",
    "WAFlowsDomainUtils",
    "WAFlowsDropdown.react",
    "WAFlowsEmbeddedLink.react",
    "WAFlowsFooter.react",
    "WAFlowsForm.react",
    "WAFlowsHorizontalDivider.react",
    "WAFlowsIf.react",
    "WAFlowsImage.react",
    "WAFlowsImageCarousel.react",
    "WAFlowsItemDetailFooter.react",
    "WAFlowsNavigationList.react",
    "WAFlowsOptIn.react",
    "WAFlowsPhotoPicker.react",
    "WAFlowsRadioButtonsGroup.react",
    "WAFlowsResponseView.react",
    "WAFlowsRichText.react",
    "WAFlowsSwitch.react",
    "WAFlowsText.react",
    "WAFlowsTextArea.react",
    "WAFlowsTextInput.react",
    "WAFlowsTypes",
    "WebDriverConfig",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        e >= 704 &&
        (o("WebDriverConfig").isJestE2ETestRun ||
          o("WAFlowsDomainUtils").isOndemandFlowsUrl() ||
          o("WAFlowsDomainUtils").isInternFlowsUrl() ||
          r("justknobx")._("5636"))
      );
    }
    var u = function (t, n) {
      var e,
        r,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f =
          ((e = {}),
          (e[(r = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.FORM] = {
            Component: o("WAFlowsForm.react").WAFlowsForm,
            TYPE: o("WAFlowsForm.react").TYPE,
            SCHEMA: o("WAFlowsForm.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT] = {
            Component: o("WAFlowsTextInput.react").WAFlowsTextInput,
            TYPE: o("WAFlowsTextInput.react").TYPE,
            SCHEMA: o("WAFlowsTextInput.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_AREA] = {
            Component: o("WAFlowsTextArea.react").WAFlowsTextArea,
            TYPE: o("WAFlowsTextArea.react").TYPE,
            SCHEMA: o("WAFlowsTextArea.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_BODY] = {
            Component: (a = o("WAFlowsText.react")).WAFlowsTextBody,
            TYPE: a.TEXT_BODY_TYPE,
            SCHEMA: a.TEXT_BODY_SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION] = {
            Component: a.WAFlowsTextCaption,
            TYPE: a.TEXT_CAPTION_TYPE,
            SCHEMA: a.TEXT_CAPTION_SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_HEADING] = {
            Component: a.WAFlowsTextHeading,
            TYPE: a.TEXT_HEADING_TYPE,
            SCHEMA: a.TEXT_HEADING_SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_SUBHEADING] = {
            Component: a.WAFlowsTextSubheading,
            TYPE: a.TEXT_SUBHEADING_TYPE,
            SCHEMA: a.TEXT_SUBHEADING_SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.FOOTER] = {
            Component: o("WAFlowsFooter.react").WAFlowsFooter,
            TYPE: o("WAFlowsFooter.react").TYPE,
            SCHEMA: o("WAFlowsFooter.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.EMBEDDED_LINK] = {
            Component: o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink,
            TYPE: o("WAFlowsEmbeddedLink.react").TYPE,
            SCHEMA: o("WAFlowsEmbeddedLink.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.IMAGE] = {
            Component: o("WAFlowsImage.react").WAFlowsImage,
            TYPE: o("WAFlowsImage.react").TYPE,
            SCHEMA: o("WAFlowsImage.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP] = {
            Component: (i = o("WAFlowsRadioButtonsGroup.react"))
              .WAFlowsRadioButtonsGroup,
            TYPE: i.TYPE,
            SCHEMA: i.SCHEMA,
            RESPONSE_VIEW: i.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.DROPDOWN] = {
            Component: (l = o("WAFlowsDropdown.react")).WAFlowsDropdown,
            TYPE: l.TYPE,
            SCHEMA: l.SCHEMA,
            RESPONSE_VIEW: l.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP] = {
            Component: (u = o("WAFlowsCheckboxGroup.react"))
              .WAFlowsCheckboxGroup,
            TYPE: u.TYPE,
            SCHEMA: u.SCHEMA,
            RESPONSE_VIEW: u.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.OPT_IN] = {
            Component: (c = o("WAFlowsOptIn.react")).WAFlowsOptIn,
            TYPE: c.TYPE,
            SCHEMA: c.SCHEMA,
            RESPONSE_VIEW: c.RESPONSE_VIEW,
          }),
          (e[o("WAFlowsItemDetailFooter.react").TYPE] = {
            Component: o("WAFlowsItemDetailFooter.react")
              .WAFlowsItemDetailFooter,
            TYPE: o("WAFlowsItemDetailFooter.react").TYPE,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER] = {
            Component: (d = o("WAFlowsPhotoPicker.react")).WAFlowsPhotoPicker,
            TYPE: d.TYPE,
            SCHEMA: d.SCHEMA,
            RESPONSE_VIEW: d.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER] = {
            Component: (m = o("WAFlowsDocumentPicker.react"))
              .WAFlowsDocumentPicker,
            TYPE: m.TYPE,
            SCHEMA: m.SCHEMA,
            RESPONSE_VIEW: m.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.IF] = {
            Component: o("WAFlowsIf.react").WAFlowsIf,
            TYPE: o("WAFlowsIf.react").TYPE,
            SCHEMA: o("WAFlowsIf.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.SWITCH] = {
            Component: o("WAFlowsSwitch.react").WAFlowsSwitch,
            TYPE: o("WAFlowsSwitch.react").TYPE,
            SCHEMA: o("WAFlowsSwitch.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.HORIZONTAL_DIVIDER] = {
            Component: o("WAFlowsHorizontalDivider.react")
              .WAFlowsHorizontalDivider,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.RICH_TEXT] = {
            Component: o("WAFlowsRichText.react").WAFlowsRichText,
            TYPE: o("WAFlowsRichText.react").TYPE,
            SCHEMA: o("WAFlowsRichText.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST] = {
            Component: o("WAFlowsNavigationList.react").WAFlowsNavigationList,
            TYPE: o("WAFlowsNavigationList.react").TYPE,
            SCHEMA: o("WAFlowsNavigationList.react").SCHEMA,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER] = {
            Component: (p = o("WAFlowsCalendarPicker.react"))
              .WAFlowsCalendarPicker,
            TYPE: p.TYPE,
            SCHEMA: p.SCHEMA,
            RESPONSE_VIEW: p.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR] = {
            Component: (_ = o("WAFlowsChipsSelector.react"))
              .WAFlowsChipsSelector,
            TYPE: _.TYPE,
            SCHEMA: _.SCHEMA,
            RESPONSE_VIEW: _.RESPONSE_VIEW,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.RESPONSE_VIEW] = {
            Component: o("WAFlowsResponseView.react").WAFlowsResponseView,
          }),
          (e[r.WA_FLOWS_COMPONENT_NAMES.IMAGE_CAROUSEL] = {
            Component: o("WAFlowsImageCarousel.react").WAFlowsImageCarousel,
            TYPE: o("WAFlowsImageCarousel.react").TYPE,
            SCHEMA: o("WAFlowsImageCarousel.react").SCHEMA,
          }),
          e),
        g = f[t];
      if (g != null) return g;
      switch (t) {
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DATE_PICKER:
          return (
            n != null || s(0, 90267),
            o("WAFlowsComponentToVersion.react").getDatePicker(n)
          );
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR:
          return null;
      }
    };
    async function c(t) {
      if (!e(t)) return null;
      var n = await r("JSResource")("WAFlowsSeatSelector.react")
          .__setRef("WAFlowsComponentLibrary")
          .load(),
        o = n.SCHEMA,
        a = n.TYPE,
        i = n.WAFlowsSeatSelector;
      return { Component: i, TYPE: a, SCHEMA: o };
    }
    var d = function (t, n) {
      return t === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR
        ? c(n)
        : new Promise(function (e) {
            return e(u(t, n));
          });
    };
    ((l.getComponentDefinition = u), (l.getComponentDefinitionLazyLoad = d));
  },
  98,
);
