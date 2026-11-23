__d(
  "WAFlowJSONNavigationListValidatorV602",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONNavigationListProperties",
    "WAFlowJSONValidationError",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this,
            t = [],
            n = this.flowJSONData.flowJson.screens;
          return (
            n.forEach(function (n) {
              var r = e.flowJSONData.getComponentDataByType(
                n.id,
                o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
              );
              if (r.length !== 0) {
                var a = new Map();
                (r.forEach(function (t) {
                  var r = "" + t.jsonPointer,
                    i = t.component;
                  e.validateEndAddOnAndMediaSize(i) === !0 &&
                    a.set(
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListErrorKeywords
                        .END_ADD_ON_MISSING,
                      ["" + r],
                    );
                  var l = e.validateEndAddOn(i);
                  Array.isArray(l) &&
                    l.length > 0 &&
                    a.set(
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListErrorKeywords.END_ADD_ON,
                      l.map(function (e) {
                        return (
                          r +
                          "/" +
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.LIST_ITEMS +
                          "/" +
                          e +
                          "/" +
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.END_ADD_ON
                        );
                      }),
                    );
                  var s = e.validateOnClickAction(i, t.jsonPointer);
                  if (s != null && s.doubleReferencing) {
                    var u = [],
                      c =
                        t.jsonPointer +
                        "/" +
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION;
                    (u.push("" + c),
                      s.itemActionPointers.length > 0 &&
                        u.push.apply(u, s.itemActionPointers),
                      a.set(
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListErrorKeywords
                          .DUPLICATE_ACTION,
                        u,
                      ));
                  }
                  s != null &&
                    s.actionIsMissing &&
                    a.set(
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListErrorKeywords.MISSING_ACTION,
                      ["" + r],
                    );
                  var d = e.validateBadgeCount(i);
                  d === !1 &&
                    a.set(
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListErrorKeywords.BADGE_COUNT,
                      ["" + r],
                    );
                  var m = e.validateNavigationScreen(i, n.id, t.jsonPointer);
                  m != null &&
                    m.length > 0 &&
                    a.set(
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListErrorKeywords
                        .INVALID_NAVIGATION,
                      m,
                    );
                }),
                  e.generateErrorMessage(t, a, n.id));
              }
            }),
            t
          );
        }),
        (n.validateEndAddOnAndMediaSize = function (t) {
          if (
            t.type ===
              o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST &&
            !(
              !Object.prototype.hasOwnProperty.call(
                t,
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.MEDIA_SIZE,
              ) ||
              !Object.prototype.hasOwnProperty.call(
                t,
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
              )
            )
          ) {
            var e =
                t[
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListPropsType.MEDIA_SIZE
                ],
              n =
                t[
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListPropsType.LIST_ITEMS
                ];
            if (
              !(
                !Array.isArray(n) ||
                e !==
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListMediaSizeType.LARGE
              )
            ) {
              var r = n.some(function (e) {
                return Object.prototype.hasOwnProperty.call(
                  e,
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListPropsType.END_ADD_ON,
                );
              });
              return (
                r &&
                e ===
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListMediaSizeType.LARGE
              );
            }
          }
        }),
        (n.validateEndAddOn = function (t) {
          if (
            Object.prototype.hasOwnProperty.call(
              t,
              o("WAFlowJSONNavigationListProperties")
                .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
            )
          ) {
            var e =
              t[
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.LIST_ITEMS
              ];
            if (Array.isArray(e)) {
              var n = [];
              return (
                e.forEach(function (e, t) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      e,
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.END_ADD_ON,
                    ) &&
                    e[
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.END_ADD_ON
                    ] != null
                  ) {
                    var r =
                        e[
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.END_ADD_ON
                        ],
                      a = Object.keys(r);
                    (a.length < 1 || a.length > 2) && n.push(t);
                  }
                }),
                n
              );
            }
          }
        }),
        (n.validateOnClickAction = function (t, n) {
          if (
            Object.prototype.hasOwnProperty.call(
              t,
              o("WAFlowJSONNavigationListProperties")
                .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
            )
          ) {
            var e =
                t[
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListPropsType.LIST_ITEMS
                ],
              r = Object.prototype.hasOwnProperty.call(
                t,
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
              )
                ? t[
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION
                  ]
                : void 0;
            if (Array.isArray(e)) {
              var a = [],
                i = e.reduce(
                  function (e, t, i) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        t,
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                      )
                    ) {
                      var l =
                        t[
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION
                        ];
                      return (
                        a.push(
                          n +
                            "/" +
                            o("WAFlowJSONNavigationListProperties")
                              .WAFlowJSONNavigationListPropsType.LIST_ITEMS +
                            "/" +
                            i +
                            "/" +
                            o("WAFlowJSONNavigationListProperties")
                              .WAFlowJSONNavigationListPropsType
                              .ON_CLICK_ACTION,
                        ),
                        {
                          doubleReferencing: e.doubleReferencing && !(r && l),
                          allItemsHaveAction: e.allItemsHaveAction && l,
                        }
                      );
                    } else
                      return {
                        doubleReferencing: e.doubleReferencing,
                        allItemsHaveAction: e.allItemsHaveAction && !1,
                      };
                  },
                  { doubleReferencing: !0, allItemsHaveAction: !0 },
                );
              return {
                doubleReferencing: !i.doubleReferencing,
                actionIsMissing: !(i.allItemsHaveAction || r),
                itemActionPointers: a,
              };
            }
          }
        }),
        (n.validateBadgeCount = function (t) {
          if (
            t.type ===
              o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST &&
            Object.prototype.hasOwnProperty.call(
              t,
              o("WAFlowJSONNavigationListProperties")
                .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
            )
          ) {
            var e =
              t[
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.LIST_ITEMS
              ];
            if (Array.isArray(e)) {
              var n = e.reduce(function (e, t) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    t,
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListPropsType.BADGE,
                  )
                ) {
                  var n =
                    t[
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.BADGE
                    ];
                  return n != null ? e + 1 : e;
                } else return e;
              }, 0);
              return n <= 1;
            }
          }
        }),
        (n.validateNavigationScreen = function (t, n, r) {
          if (
            Object.prototype.hasOwnProperty.call(
              t,
              o("WAFlowJSONNavigationListProperties")
                .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
            )
          ) {
            var e =
              t[
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListPropsType.LIST_ITEMS
              ];
            if (Array.isArray(e)) {
              var a = Object.prototype.hasOwnProperty.call(
                  t,
                  o("WAFlowJSONNavigationListProperties")
                    .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                )
                  ? t[
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION
                    ]
                  : void 0,
                i = [];
              if (
                (a == null ? void 0 : a.name) ===
                o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE
              ) {
                var l,
                  s = a == null || (l = a.next) == null ? void 0 : l.screen;
                s === n &&
                  i.push(
                    r +
                      "/" +
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                  );
              }
              var u = e.reduce(function (e, t, a) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    t,
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                  ) &&
                  t[
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION
                  ] != null
                ) {
                  var i =
                    t[
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION
                    ];
                  if (
                    (i == null ? void 0 : i.name) ===
                    o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE
                  ) {
                    var l,
                      s = i == null || (l = i.next) == null ? void 0 : l.screen;
                    s === n &&
                      e.push(
                        r +
                          "/" +
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.LIST_ITEMS +
                          "/" +
                          a +
                          "/" +
                          o("WAFlowJSONNavigationListProperties")
                            .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                      );
                  }
                  return e;
                } else return e;
              }, []);
              return (i.push.apply(i, u), i);
            }
          }
        }),
        (n.generateErrorMessage = function (t, n, r) {
          for (var e of n.entries()) {
            var a = e[0],
              i = e[1];
            if (
              a ===
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListErrorKeywords.END_ADD_ON &&
              i.length > 0
            ) {
              var l;
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDuplicatePropertyForConditionErrorMsg(
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
                    "" +
                      (l = o("WAFlowJSONNavigationListProperties"))
                        .WAFlowJSONNavigationListPropsType.END_ADD_ON,
                    "add-on should have at least 1 and at most 2 of '" +
                      l.WAFlowJSONNavigationListPropsType.TITLE +
                      "', '" +
                      l.WAFlowJSONNavigationListPropsType.METADATA +
                      "' or '" +
                      l.WAFlowJSONNavigationListPropsType.DESCRIPTION +
                      ".'",
                  ),
                  i,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .DUPLICATE_PROPETY_FOR_CONDITION,
                ),
              );
            }
            (a ===
              o("WAFlowJSONNavigationListProperties")
                .WAFlowJSONNavigationListErrorKeywords.END_ADD_ON_MISSING &&
              i.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueForConditionErrorMsg(
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
                    "'" +
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.END_ADD_ON +
                      "' add-on is present",
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListPropsType.MEDIA_SIZE,
                    o("WAFlowJSONNavigationListProperties")
                      .WAFlowJSONNavigationListMediaSizeType.LARGE,
                  ),
                  i,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_PROPERTY_VALUE_FOR_CONDITION,
                ),
              ),
              a ===
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListErrorKeywords.DUPLICATE_ACTION &&
                i.length > 0 &&
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDuplicatePropertyForConditionErrorMsg(
                      o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES
                        .NAVIGATION_LIST,
                      "" +
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                      "can only be defined at either root level or within the '" +
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.LIST_ITEMS +
                        "', but not both.",
                    ),
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .DUPLICATE_PROPETY_FOR_CONDITION,
                  ),
                ),
              a ===
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListErrorKeywords.MISSING_ACTION &&
                i.length > 0 &&
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPropertyErrorMsg(
                      "" +
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.ON_CLICK_ACTION,
                    ),
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .MISSING_REQUIRED_PROPERTY,
                  ),
                ),
              a ===
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListErrorKeywords.BADGE_COUNT &&
                i.length > 0 &&
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxQuantityRequiredErrorMsg(
                      "" +
                        o("WAFlowJSONNavigationListProperties")
                          .WAFlowJSONNavigationListPropsType.LIST_ITEMS,
                      1,
                      o("WAFlowJSONNavigationListProperties")
                        .WAFlowJSONNavigationListPropsType.BADGE + " item",
                    ),
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAX_ITEMS_REQUIRED,
                  ),
                ),
              a ===
                o("WAFlowJSONNavigationListProperties")
                  .WAFlowJSONNavigationListErrorKeywords.INVALID_NAVIGATION &&
                i.length > 0 &&
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getSameScreenNavigationErrorMsg(
                      [r],
                    ),
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_NAVIGATE_ACTION_NEXT_SCREEN_NAME,
                  ),
                ));
          }
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNavigationListValidatorV602 = e;
  },
  98,
);
