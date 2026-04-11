__d(
  "WAWebModal.react",
  [
    "$InternalEnum",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDragAndDrop.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebModalManager",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useRef,
      _ = n("$InternalEnum").Mirrored([
        "Box",
        "BoxLarge",
        "Flex",
        "Guide",
        "Tower",
        "Auto",
        "AutoWrap",
        "Invite",
        "InviteNew",
        "ColumnButtons",
        "Multiline",
        "Upgrade",
        "Promote",
        "CommandPalette",
        "CommandPaletteV2",
        "QuickReplies",
        "StatusViewerList",
        "LinkPopup",
        "StatusReport",
        "ChatAssignment",
        "TowerLarge",
        "HistorySyncProgress",
        "MessageEdit",
        "ForwardMediaWithCaption",
        "MessageActionsModal",
        "DataSharing",
        "UpdatedDataSharing",
        "DeleteNewsletter",
        "Small",
        "ListsAssignModal",
        "LabelList",
        "LabelEdit",
        "LabelChooseColor",
        "Comments",
        "BotNut",
        "EventCreation",
        "AdAccountRecovery",
        "MusicAttribution",
        "BusinessHours",
        "BusinessCategories",
        "BusinessProfile",
        "MediaHub",
        "GroupSafetyCheck",
        "ReachoutTimelock",
        "AddOrUpdatePix",
        "IndividualNewChatMessageCapped",
        "CDS",
        "Questions",
        "GalaxyFlowResponsePopup",
        "BusinessBroadcastUploadModal",
        "PaymentsFlow",
        "BizToolsAdCreationNux",
        "BizToolsAdCreationEmailOnboarding",
        "BizToolsAdCreationSuccess",
        "BillingWizardDialog",
        "PdfEdit",
        "PdfEditError",
        "HardRefresh",
        "EditAbout",
        "ChannelCreation",
        "ExportChat",
      ]),
      f = {
        overlay: {
          position: "xixxii4",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          boxSizing: "x9f619",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        backdrop: {
          zIndex: "xjhb59c",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          backgroundColor: "x1honnu5",
          $$css: !0,
        },
        backdropRefreshed: { backgroundColor: "x1honnu5", $$css: !0 },
        backdropMediaHub: { zIndex: "xtsfpqs", $$css: !0 },
        popup: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          flexDirection: "xdt5ytf",
          width: "xvue9z",
          paddingTop: "x1xy6bms",
          paddingInlineEnd: "x64bnmy",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "x13jy36j",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "xrlxcrs",
          borderStartEndRadius: "x7g1fbw",
          borderEndEndRadius: "xxl59ln",
          borderEndStartRadius: "xmw6rta",
          boxShadow: "x1shw4ur",
          $$css: !0,
        },
        popupMaterial: {
          borderStartStartRadius: "x1xn7y0n",
          borderStartEndRadius: "x1uxb8k9",
          borderEndEndRadius: "x1vmbcc8",
          borderEndStartRadius: "x16xm01d",
          boxShadow: "xs2e80n",
          $$css: !0,
        },
        popupSmall: { width: "x1l2rt3b", $$css: !0 },
        popupChannelCreation: {
          position: "x1n2onr6",
          width: "x1fwfoet",
          height: "xrlp1an",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
        popupAutoWrap: { minWidth: "x1htk8sl", width: "x14atkfc", $$css: !0 },
        popupAutoWrapContents: {
          maxWidth: "x1m189uc",
          minWidth: "xgqtt45",
          $$css: !0,
        },
        popupBody: {
          position: "x1n2onr6",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1l7klhg",
          overflowWrap: "x1mzt3pk",
          whiteSpace: "xeaf4i8",
          $$css: !0,
        },
        popupTitle: {
          marginBottom: "xdqhqc9",
          fontSize: "x1603h9y",
          fontWeight: "xo1l8bm",
          lineHeight: "x132q4wb",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        backdropCover: { backgroundColor: "x14zpict", $$css: !0 },
        showOverStatus: { zIndex: "xc9l9hb", $$css: !0 },
        popupContents: {
          fontSize: "x12lqup9",
          lineHeight: "x1o1kx08",
          $$css: !0,
        },
        popupBox: {
          position: "x1n2onr6",
          width: "xvue9z",
          height: "x1egiwwb",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupBoxLarge: {
          position: "x1n2onr6",
          width: "x1qfffx7",
          height: "xjr88my",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupFlex: {
          width: "x14atkfc",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        popupAuto: {
          width: "x14atkfc",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          transform: "x15j3iad",
          $$css: !0,
        },
        popupAutoTitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        popupAutoBody: { position: "x1uhb9sk", $$css: !0 },
        popupAutoContents: { backgroundColor: "x1280gxy", $$css: !0 },
        popupAutoControls: {
          paddingTop: "x889kno",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "xaso8d8",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupFlexInvite: {
          height: "x1ad3yod",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        popupFlexInviteNew: {
          width: "xr6pica",
          paddingTop: "x1p5oq8j",
          paddingInlineEnd: "x194u5oj",
          paddingBottom: "x84yb8i",
          paddingInlineStart: "x1mfogq2",
          $$css: !0,
        },
        popupFlexInviteNewControls: {
          paddingTop: "x1p57kb1",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        popupFlexUpgradeControls: {
          paddingTop: "x10lzpyj",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xaso8d8",
          $$css: !0,
        },
        popupFlexControls: {
          paddingTop: "x123j3cw",
          paddingInlineEnd: "xfo0vy5",
          paddingBottom: "x156go17",
          paddingInlineStart: "x1lyran6",
          $$css: !0,
        },
        popupTower: {
          position: "x1n2onr6",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1l7klhg",
          width: "xs8rnei",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          marginTop: "x1coevs8",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xui9b5u",
          marginInlineStart: "x1lziwak",
          "@media screen and (min-height: 1000px)_marginTop": "xg3pqpk",
          "@media screen and (min-height: 1000px)_marginInlineEnd": "xusj4dd",
          "@media screen and (min-height: 1000px)_marginBottom": "x1a6k631",
          "@media screen and (min-height: 1000px)_marginInlineStart":
            "x1fwmvtr",
          "@media screen and (max-height: 700px)_marginTop": "x1n7bigs",
          "@media screen and (max-height: 700px)_marginInlineEnd": "x6ln8mz",
          "@media screen and (max-height: 700px)_marginBottom": "x12v3509",
          "@media screen and (max-height: 700px)_marginInlineStart": "xf35npv",
          $$css: !0,
        },
        popupTowerLarge: { width: "x1qfffx7", $$css: !0 },
        popupControls: {
          display: "x78zum5",
          flexWrap: "x8hhl5t",
          justifyContent: "x13a6bvl",
          paddingTop: "x13crsa5",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xaso8d8",
          textAlign: "xp4054r",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        popupGuideBackdrop: { backgroundColor: "xglhzf2", $$css: !0 },
        popupGuidePopup: {
          width: "x14atkfc",
          maxWidth: "x65f84u",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "xjbqb8w",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        popupColumnButtonsControls: {
          flexDirection: "xdt5ytf",
          flexWrap: "x1a02dak",
          alignItems: "xuk3077",
          $$css: !0,
        },
        popupMultilineContents: { whiteSpace: "x1fj9vlw", $$css: !0 },
        popupStatusViewerList: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupGalaxyFlowResponse: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupGalaxyFlowResponseControls: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
        popupPromote: { width: "x3p9ev8", $$css: !0 },
        popupPromoteControls: {
          justifyContent: "xl56j7k",
          textAlign: "x2b8uid",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupForwardMediaWithCaption: { width: "x1l895tw", $$css: !0 },
        popupForwardMediaWithCaptionControls: {
          textAlign: "x2b8uid",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupMessageActionsModal: { width: "x1l2rt3b", $$css: !0 },
        popupMessageActionsModalControls: {
          textAlign: "x2b8uid",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupCommandPalette: {
          position: "xixxii4",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          width: "x3p9ev8",
          maxHeight: "x179dxpb",
          top: "x15nb5xm",
          borderStartStartRadius: "xxrkv7w",
          borderStartEndRadius: "x7ab6jx",
          borderEndEndRadius: "x17gapd7",
          borderEndStartRadius: "xsq8q6z",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          backgroundColor: null,
          $$css: !0,
        },
        popupCommandPaletteV2: {
          width: "xvue9z",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        popupQuickReplies: {
          width: "xvue9z",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          transform: "x15j3iad",
          $$css: !0,
        },
        popupQuickRepliesTitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        popupQuickRepliesBody: { position: "x1uhb9sk", $$css: !0 },
        popupQuickRepliesContents: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x67w97k",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupQuickRepliesControls: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "x67w97k",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupChatAssignment: { width: "x1l2rt3b", $$css: !0 },
        popupHistorySyncProgress: { width: "x1l2rt3b", $$css: !0 },
        popupDataSharing: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          width: "x1l2rt3b",
          $$css: !0,
        },
        popupUpdatedDataSharing: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          width: "xbstwhj",
          $$css: !0,
        },
        popupMessageEdit: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x1n2onr6",
          width: "x1c4ky7w",
          maxHeight: "x179dxpb",
          $$css: !0,
        },
        popupMessageEditBody: { minHeight: "x2lwn1j", $$css: !0 },
        popupMessageEditContents: { height: "x5yr21d", $$css: !0 },
        popupDeleteNewsletter: {
          width: "x1l2rt3b",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
        popupDeleteNewsletterBody: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
        popupDeleteNewsletterContents: { flexGrow: "x1iyjqo2", $$css: !0 },
        popupListsAssignModal: {
          width: "x3p9ev8",
          paddingTop: "x889kno",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupListsAssignModalTitle: {
          paddingTop: "xz9dl7a",
          paddingInlineStart: "x162tt16",
          paddingBottom: "xx6bls6",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        popupListsAssignModalContents: {
          maxHeight: "xubnuyq",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        popupListsAssignModalControls: {
          paddingTop: "x1cnzs8",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        popupLabelList: {
          width: "x1l2rt3b",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupLabelListControls: {
          paddingTop: "x1p5oq8j",
          paddingBottom: "xwxc41k",
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
        popupLabelListContents: {
          maxHeight: "xubnuyq",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        popupLabelEdit: {
          width: "x1l2rt3b",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          transform: "x15j3iad",
          $$css: !0,
        },
        popupLabelEditTitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        popupLabelEditControls: {
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupLabelEditContents: { backgroundColor: "x1280gxy", $$css: !0 },
        popupLabelChooseColor: {
          width: "x14atkfc",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          transform: "x15j3iad",
          $$css: !0,
        },
        popupLabelChooseColorTitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        popupLabelChooseColorControls: {
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
        popupComments: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          maxHeight: "x12f24lm",
          backgroundColor: "xntdpzj",
          $$css: !0,
        },
        popupQuestions: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          maxHeight: "x12f24lm",
          width: "x1c4ky7w",
          $$css: !0,
        },
        popupBotNut: { width: "xht4xr3", $$css: !0 },
        popupEventCreation: {
          width: "x1peuizl",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupAdAccountRecovery: { width: "x14rvwrp", $$css: !0 },
        popupBusinessHoursControls: {
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
        popupBusinessCategoriesControls: {
          paddingTop: "xyinxu5",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
        popupBusinessProfile: {
          maxHeight: "x9c89tr",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupBusinessProfileTitle: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          marginInlineEnd: "x1trhqq4",
          marginInlineStart: "x18xomjl",
          $$css: !0,
        },
        popupBusinessProfileBody: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          maxHeight: "xmz0i5r",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        popupBusinessProfileContents: {
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        popupBusinessProfileControls: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          rowGap: "x1b8z93w",
          $$css: !0,
        },
        popupMediaHub: {
          position: "x1n2onr6",
          maxWidth: "x15o75uv",
          width: "x8fmnwm",
          minWidth: "xu9qebc",
          minHeight: "x5mc7k8",
          maxHeight: "xjd8us4",
          height: "xkdlbmv",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupMediaHubContents: {
          minHeight: "x5mc7k8",
          maxHeight: "xjd8us4",
          height: "x1id935b",
          $$css: !0,
        },
        popupFlexGroupSafetyCheckCenterControls: {
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        popupReachoutTimelock: { width: "x3p9ev8", $$css: !0 },
        popupIndividualNewChatMessageCapped: { width: "xvue9z", $$css: !0 },
        popupAddOrUpdatePix: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          width: "xtm0smt",
          height: "xt7dq6l",
          $$css: !0,
        },
        popupPaymentsFlow: { width: "xr6pica", height: "xt7dq6l", $$css: !0 },
        popupCDS: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          height: "xt7dq6l",
          $$css: !0,
        },
        popupBBUpload: { boxSizing: "x1afcbsf", $$css: !0 },
        popupBizToolsAdCreationNux: {
          width: "x1n2tayp",
          height: "x1shxdc5",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        popupBizToolsAdCreationNuxControls: {
          rowGap: "x1b8z93w",
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          $$css: !0,
        },
        popupBizToolsAdCreationEmailOnboarding: {
          width: "x4onevt",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupBizToolsAdCreationSuccess: {
          width: "x1n2tayp",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
        popupBizToolsAdCreationSuccessControls: {
          paddingTop: "x14a8spa",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        popupBillingWizard: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          maxHeight: "xqbnct6",
          width: "xw3w31c",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "x1c1uobl",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        popupPdfEdit: {
          backgroundColor: "x1od0jb8",
          width: "x1l2rt3b",
          height: "xpdbtf9",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupPdfEditError: {
          backgroundColor: "x1od0jb8",
          width: "x1l2rt3b",
          minHeight: "x9l5fec",
          maxHeight: "x1p6zaud",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        hardRefreshDialog: {
          width: "x1l2rt3b",
          height: "x1m3v4wt",
          borderStartStartRadius: "xuqqiot",
          borderStartEndRadius: "x1lkg3h2",
          borderEndEndRadius: "x17mbzc4",
          borderEndStartRadius: "xcouhex",
          $$css: !0,
        },
        hardRefreshDialogControls: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        popupEditAbout: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
      },
      g = {
        hidden: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        visible: { overflowX: "x1plvlek", overflowY: "xryxfnj", $$css: !0 },
      };
    function h(t) {
      var n,
        a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = u.onDragChange,
        h = u.onDrop,
        y = u.overflow,
        C = y === void 0 ? "hidden" : y,
        b = m(r("WAWebVoipUiPopoutWindowContext")),
        v = b.isDocPip || b.isContextInPopoutWindow,
        S = p(null),
        R = p(null),
        L = p(),
        E = function (t) {
          var e;
          (e = S.current) == null || e.onDragOver(t);
        },
        k = function (t) {
          var e;
          (e = S.current) == null || e.onDragStart(t);
        },
        I = function (t) {
          var e;
          (e = S.current) == null || e.onDragEnd(t);
        },
        T =
          u.type === _.StatusViewerList && u.dimensions
            ? {
                height: u.dimensions.height + "px",
                width: u.dimensions.width + "px",
              }
            : null,
        D = [f.popup, g[C], f.popupMaterial],
        x = [
          f.overlay,
          f.backdrop,
          f.backdropRefreshed,
          u.type === _.MediaHub && f.backdropMediaHub,
        ];
      (u.cover === !0 && x.push(f.backdropCover),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(
          (n = u.tsNavigationData) != null ? n : { surface: "unknown" },
        ));
      var $, P, N, M;
      if (u.type != null)
        switch (u.type) {
          case _.Invite: {
            D.push(f.popupFlexInvite);
            break;
          }
          case _.InviteNew: {
            (D.push(f.popupFlexInviteNew), (M = f.popupFlexInviteNewControls));
            break;
          }
          case _.Upgrade: {
            M = f.popupFlexUpgradeControls;
            break;
          }
          case _.Box: {
            D.push(f.popupBox);
            break;
          }
          case _.BoxLarge: {
            D.push(f.popupBoxLarge);
            break;
          }
          case _.Flex: {
            (D.push(f.popupFlex), (M = f.popupFlexControls));
            break;
          }
          case _.Tower: {
            D.push(f.popupTower);
            break;
          }
          case _.TowerLarge: {
            D.push(f.popupTower, f.popupTowerLarge);
            break;
          }
          case _.Auto: {
            (D.push(f.popupAuto),
              ($ = f.popupAutoTitle),
              (P = f.popupAutoBody),
              (N = f.popupAutoContents),
              (M = f.popupAutoControls));
            break;
          }
          case _.ColumnButtons: {
            M = f.popupColumnButtonsControls;
            break;
          }
          case _.Multiline: {
            N = f.popupMultilineContents;
            break;
          }
          case _.StatusViewerList: {
            (D.push(f.popupStatusViewerList), x.push(f.showOverStatus));
            break;
          }
          case _.Promote:
          case _.BotNut: {
            (D.push(f.popupPromote),
              u.type === _.BotNut && D.push(f.popupBotNut),
              (M = f.popupPromoteControls));
            break;
          }
          case _.CommandPalette: {
            D.push(f.popupCommandPalette);
            break;
          }
          case _.CommandPaletteV2: {
            (D.push(f.popupCommandPalette), D.push(f.popupCommandPaletteV2));
            break;
          }
          case _.QuickReplies: {
            (D.push(f.popupQuickReplies),
              ($ = f.popupQuickRepliesTitle),
              (P = f.popupQuickRepliesBody),
              (N = f.popupQuickRepliesContents),
              (M = f.popupQuickRepliesControls));
            break;
          }
          case _.ChatAssignment: {
            D.push(f.popupChatAssignment);
            break;
          }
          case _.HistorySyncProgress: {
            D.push(f.popupHistorySyncProgress);
            break;
          }
          case _.DataSharing: {
            D.push(f.popupDataSharing);
            break;
          }
          case _.UpdatedDataSharing: {
            D.push(f.popupUpdatedDataSharing);
            break;
          }
          case _.GalaxyFlowResponsePopup: {
            (D.push(f.popupGalaxyFlowResponse),
              (M = f.popupGalaxyFlowResponseControls));
            break;
          }
          case _.MessageEdit: {
            (D.push(f.popupMessageEdit),
              (P = f.popupMessageEditBody),
              (N = f.popupMessageEditContents));
            break;
          }
          case _.Guide: {
            (D.push(f.popupGuidePopup), x.push(f.popupGuideBackdrop));
            break;
          }
          case _.StatusReport: {
            x.push(f.showOverStatus);
            break;
          }
          case _.MusicAttribution: {
            x.push(f.showOverStatus);
            break;
          }
          case _.LinkPopup: {
            x.push(f.showOverStatus);
            break;
          }
          case _.ListsAssignModal: {
            (D.push(f.popupListsAssignModal),
              ($ = f.popupListsAssignModalTitle),
              (N = f.popupListsAssignModalContents),
              (M = f.popupListsAssignModalControls));
            break;
          }
          case _.LabelList: {
            (D.push(f.popupLabelList),
              (N = f.popupLabelListContents),
              (M = f.popupLabelListControls));
            break;
          }
          case _.LabelEdit: {
            (D.push(f.popupLabelEdit),
              ($ = f.popupLabelEditTitle),
              (M = f.popupLabelEditControls),
              (N = f.popupLabelEditContents));
            break;
          }
          case _.LabelChooseColor: {
            (D.push(f.popupLabelChooseColor),
              ($ = f.popupLabelChooseColorTitle),
              (M = f.popupLabelChooseColorControls));
            break;
          }
          case _.ForwardMediaWithCaption: {
            (D.push(f.popupForwardMediaWithCaption),
              (M = f.popupForwardMediaWithCaptionControls));
            break;
          }
          case _.MessageActionsModal: {
            (D.push(f.popupMessageActionsModal),
              (M = f.popupMessageActionsModalControls));
            break;
          }
          case _.DeleteNewsletter: {
            (D.push(f.popupDeleteNewsletter),
              (P = f.popupDeleteNewsletterBody),
              (N = f.popupDeleteNewsletterContents));
            break;
          }
          case _.Questions: {
            D.push(f.popupQuestions);
            break;
          }
          case _.Comments: {
            D.push(f.popupComments);
            break;
          }
          case _.EventCreation: {
            D.push(f.popupEventCreation);
            break;
          }
          case _.Small: {
            D.push(f.popupSmall);
            break;
          }
          case _.ChannelCreation: {
            D.push(f.popupChannelCreation);
            break;
          }
          case _.ExportChat:
            break;
          case _.AutoWrap: {
            (D.push(f.popupAutoWrap), (N = f.popupAutoWrapContents));
            break;
          }
          case _.AdAccountRecovery: {
            D.push(f.popupAdAccountRecovery);
            break;
          }
          case _.BusinessHours: {
            (D.push(f.popupAuto),
              ($ = f.popupAutoTitle),
              (P = f.popupAutoBody),
              (N = f.popupAutoContents),
              (M = f.popupBusinessHoursControls));
            break;
          }
          case _.BusinessCategories: {
            (D.push(f.popupAuto),
              ($ = f.popupAutoTitle),
              (P = f.popupAutoBody),
              (N = f.popupAutoContents),
              (M = f.popupBusinessCategoriesControls));
            break;
          }
          case _.BusinessProfile: {
            (D.push(f.popupBusinessProfile),
              ($ = f.popupBusinessProfileTitle),
              (P = f.popupBusinessProfileBody),
              (N = f.popupBusinessProfileContents),
              (M = f.popupBusinessProfileControls));
            break;
          }
          case _.MediaHub: {
            (D.push(f.popupMediaHub), (N = f.popupMediaHubContents));
            break;
          }
          case _.GroupSafetyCheck: {
            M = f.popupFlexGroupSafetyCheckCenterControls;
            break;
          }
          case _.ReachoutTimelock: {
            D.push(f.popupReachoutTimelock);
            break;
          }
          case _.IndividualNewChatMessageCapped: {
            D.push(f.popupIndividualNewChatMessageCapped);
            break;
          }
          case _.AddOrUpdatePix: {
            D.push(f.popupAddOrUpdatePix);
            break;
          }
          case _.CDS: {
            D.push(f.popupCDS);
            break;
          }
          case _.BusinessBroadcastUploadModal: {
            D.push(f.popupBBUpload);
            break;
          }
          case _.PaymentsFlow: {
            D.push(f.popupPaymentsFlow);
            break;
          }
          case _.BizToolsAdCreationNux: {
            (D.push(f.popupBizToolsAdCreationNux),
              (M = f.popupBizToolsAdCreationNuxControls));
            break;
          }
          case _.BizToolsAdCreationEmailOnboarding: {
            D.push(f.popupBizToolsAdCreationEmailOnboarding);
            break;
          }
          case _.BizToolsAdCreationSuccess: {
            (D.push(f.popupBizToolsAdCreationSuccess),
              (M = f.popupBizToolsAdCreationSuccessControls));
            break;
          }
          case _.BillingWizardDialog: {
            D.push(f.popupBillingWizard);
            break;
          }
          case _.PdfEdit: {
            D.push(f.popupPdfEdit);
            break;
          }
          case _.PdfEditError: {
            D.push(f.popupPdfEditError);
            break;
          }
          case _.HardRefresh: {
            (D.push(f.hardRefreshDialog), (M = f.hardRefreshDialogControls));
            break;
          }
          case _.EditAbout: {
            D.push(f.popupEditAbout);
            break;
          }
        }
      var w =
          u.actions != null
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    f.popupControls,
                    M,
                    u.controlsStyle,
                  ),
                  { children: u.actions },
                ),
              )
            : null,
        A =
          u.title != null
            ? c.jsx("h1", {
                "data-testid": void 0,
                className: (s || (s = r("stylex")))(f.popupTitle, $),
                children: u.title,
              })
            : null,
        F = function (t) {
          L.current = t.target;
        },
        O = function (t) {
          t.target !== R.current ||
            L.current !== R.current ||
            (v
              ? (u.onOverlayClick == null || u.onOverlayClick(t),
                o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close())
              : u.onOverlayClick
                ? u.onOverlayClick == null || u.onOverlayClick(t)
                : o("WAWebModalManager").ModalManager.getRef(function (e) {
                    e != null &&
                      e.contains(R.current) &&
                      o("WAWebModalManager").ModalManager.close();
                  }));
        },
        B = function (t) {
          return o("WAWebL10NFbtTypeUtils").isStringOrFbt(t)
            ? t.toString()
            : "";
        },
        W = (B(u.title) + " " + B(u.children)).trim(),
        q = c.jsx(
          "div",
          babelHelpers.extends(
            { ref: R, onClick: O, onMouseDown: F },
            {
              0: {
                className:
                  "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xpb48g7 x1jn0hjm x1us19tq",
              },
              1: {
                className:
                  "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d xaaagfd x1t4djm1",
              },
            }[!!v << 0],
            {
              role: "dialog",
              "aria-modal": "true",
              children: c.jsx("div", {
                className: (s || (s = r("stylex")))(D),
                "data-animate-modal-popup": !0,
                style: T,
                ref: u.contentRef,
                "aria-label": (a = u.ariaLabel) != null ? a : W || void 0,
                "data-testid": void 0,
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, s.props(f.popupBody, P), {
                    "data-animate-modal-body": !0,
                    children: [
                      A,
                      c.jsx(
                        "div",
                        babelHelpers.extends(
                          { "data-testid": void 0 },
                          s.props(f.popupContents, N),
                          { children: u.children },
                        ),
                      ),
                      w,
                    ],
                  }),
                ),
              }),
            },
          ),
        );
      return c.jsxs(r("WAWebCopyPasteCopyableArea.react"), {
        className: s(x),
        onDragOver: E,
        onDragStart: k,
        onDragEnd: I,
        ref: l,
        "data-animate-modal-backdrop": !0,
        children: [
          h &&
            c.jsx(r("WAWebDragAndDrop.react"), {
              ref: S,
              disableFromWithin: !0,
              onDragChange: d,
              onDrop: h,
            }),
          q,
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.ModalTheme = _),
      (l.Modal = h));
  },
  98,
);
