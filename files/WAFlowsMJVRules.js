__d(
  "WAFlowsMJVRules",
  [
    "WAFlowsComponentConstants",
    "WAFlowsComponentsCommon",
    "WAFlowsDatePickerUtils",
    "WAFlowsDynamicDataValidationUtils",
    "WAFlowsError",
    "WAFlowsJSONSchemaValidatorSelector",
    "WAFlowsMediaPicker.react",
    "WAFlowsValidationConstants",
    "WDNativeImageComponentConstant",
    "isImageSizeUnderLimit",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAFlowsJSONSchemaValidatorSelector")({ allErrors: !0 }),
      u = { Function: Function };
    (s.addKeyword("instanceof", {
      compile: function (t) {
        return function (e) {
          return e instanceof u[t];
        };
      },
    }),
      s.addKeyword((e = o("WAFlowsValidationConstants")).EXTERNAL_URL, {
        validate: function (t, n) {
          if (n != null && n.isOpenUrlAction) {
            var e = n == null ? void 0 : n.url;
            if (e != null && e.length) {
              var r = t == null ? void 0 : t.pattern;
              if (r != null) return RegExp(r).test(e);
            }
            return !1;
          }
          return !0;
        },
      }),
      s.addKeyword(e.NO_DATA_SOURCE_CAN_HAVE_IMAGES_AND_COLORS, {
        validate: function (t, n) {
          return !(
            t &&
            Array.isArray(n) &&
            n.some(function (e) {
              return e.image != null;
            }) &&
            n.some(function (e) {
              return e.color != null;
            })
          );
        },
      }),
      s.addKeyword(e.NON_EMPTY_ID_IN_DATA_SOURCE, {
        validate: function (t, n) {
          if (t && Array.isArray(n)) {
            for (var e of n)
              if (!e.id || typeof e.id != "string" || e.id.trim().length === 0)
                return !1;
          }
          return !0;
        },
      }),
      s.addKeyword(e.UNIQUE_IDS_IN_DATA_SOURCE, {
        validate: function (t, n) {
          if (t && Array.isArray(n)) {
            var e = new Set(
              n.map(function (e) {
                return e.id;
              }),
            );
            return e.size === n.length;
          }
          return !0;
        },
      }),
      s.addKeyword(e.MIN_CHARS_LESS_OR_EQUAL_TO_MAX_CHARS, {
        validate: function (t, n) {
          return !(
            t &&
            n.minChars != null &&
            n.maxChars != null &&
            n.minChars > n.maxChars
          );
        },
      }),
      s.addKeyword(e.MIN_SELECTED_ITEMS_LESS_THAN_MAX_SELECTED_ITEMS, {
        validate: function (t, n) {
          var e = n.maxSelectedItems,
            o = n.minSelectedItems;
          if (t && o != null && e != null) {
            var a = r("justknobx")._("1089") ? o > e : o >= e;
            if (a) return !1;
          }
          return !0;
        },
      }),
      s.addKeyword(e.NATIVE_COMPONENT_IN_INIT_VALUES, {
        validate: function (t, n) {
          var e = n == null ? void 0 : n.initValue;
          return t && e != null
            ? !!(
                Object.prototype.hasOwnProperty.call(
                  e,
                  "__wa_flows_native_component_hint__",
                ) &&
                Object.prototype.hasOwnProperty.call(
                  e,
                  "__wa_flows_uploaded_media__",
                ) &&
                e.__wa_flows_native_component_hint__ ===
                  o("WAFlowsMediaPicker.react").NATIVE_COMPONENTS_ID
              )
            : !0;
        },
      }),
      s.addKeyword(e.DISABLED_OPTION_SELECTED, {
        validate: function (t, n) {
          var e,
            r = ((e = n == null ? void 0 : n.dataSource) != null ? e : [])
              .filter(function (e) {
                return e.enabled === !1;
              })
              .map(function (e) {
                return e.id;
              });
          return t && n.initValue !== null && n.initValue !== ""
            ? Array.isArray(n.initValue)
              ? !n.initValue.some(function (e) {
                  return r.includes(e);
                })
              : !r.includes(n.initValue)
            : !0;
        },
      }),
      s.addKeyword(e.INIT_VALUE_MATCHES_TYPE, {
        validate: function (t, n) {
          if (t && n.initValue != null)
            switch (n.type) {
              case "RadioButtonsGroup":
              case "Dropdown":
              case "TextArea":
              case "DatePicker":
              case "TextInput":
                return (
                  typeof n.initValue == "string" ||
                  typeof n.initValue == "number"
                );
              case "CheckboxGroup":
                return Array.isArray(n.initValue);
              case "OptIn":
                return typeof n.initValue == "boolean";
              default:
                return !0;
            }
          return !0;
        },
      }),
      s.addKeyword(e.REQUIRED_AND_ENABLED, {
        validate: function (t, n) {
          switch (n.type) {
            case "CalendarPicker":
              return (
                c(t, n.required, n.enabled) &&
                c(t, n.endDateRequired, n.enabled)
              );
            default:
              return c(t, n.required, n.enabled);
          }
        },
      }));
    var c = function (t, n, r) {
      return t && n != null && r != null && n ? r : !0;
    };
    s.addKeyword(e.REQUIRED_AND_VISIBLE, {
      validate: function (t, n) {
        switch (n.type) {
          case "CalendarPicker": {
            if (n.mode === "range") {
              var e,
                o = (e = r("unsafeCast")(n.required)) != null ? e : {},
                a = o["end-date"],
                i = a === void 0 ? !1 : a,
                l = o["start-date"],
                s = l === void 0 ? !1 : l;
              return d(t, s || i, n.visible);
            }
            return d(t, n.required, n.visible);
          }
          default:
            return d(t, n.required, n.visible);
        }
      },
    });
    var d = function (t, n, r) {
      return t && n != null && r != null && n === !0 ? r : !0;
    };
    (s.addKeyword(e.UNIX_TIME_STRING, {
      type: "string",
      validate: function (t, n) {
        return t ? o("WAFlowsDatePickerUtils").isValidStrTimestamp(n) : !0;
      },
    }),
      s.addKeyword(e.UNIX_TIME_STRING_ARRAY, {
        validate: function (t, n) {
          var e;
          return t && n.unavailableDates && n.unavailableDates.length > 0
            ? (e = n.unavailableDates) == null
              ? void 0
              : e.every(function (e) {
                  return o("WAFlowsDatePickerUtils").isValidStrTimestamp(e);
                })
            : !0;
        },
      }),
      s.addKeyword(e.FORMATTED_DATE_STRING, {
        type: "string",
        validate: function (t, n) {
          return t
            ? o("WAFlowsDatePickerUtils").isValidFormattedDateStr(n)
            : !0;
        },
      }),
      s.addKeyword(e.FORMATTED_DATE_STRING_ARRAY, {
        validate: function (t, n) {
          var e;
          return t && n.unavailableDates && n.unavailableDates.length > 0
            ? (e = n.unavailableDates) == null
              ? void 0
              : e.every(function (e) {
                  return o("WAFlowsDatePickerUtils").isValidFormattedDateStr(e);
                })
            : !0;
        },
      }),
      s.addKeyword(e.IMAGE_SIZE_IS_UNDER_300KB, {
        validate: function (t, n) {
          if (t && n.src && n.src.length > 0)
            try {
              return o("isImageSizeUnderLimit").isImageSizeUnderLimit(
                n.src,
                300,
              );
            } catch (e) {
              throw new (o(
                "WAFlowsError",
              ).WAFlowsInvalidBase64ValueToDecodeError)(
                "Cannot decode the given value for the image src",
              );
            }
          return !0;
        },
      }),
      s.addKeyword(e.DATA_SOURCE_IMAGE_SIZE_IS_UNDER_300KB, {
        validate: function (t, n) {
          return o(
            "WAFlowsDynamicDataValidationUtils",
          ).getImageSizeInDataSourceValidation(
            o("WDNativeImageComponentConstant").IMAGE_MAX_SIZE,
            t,
            n,
          );
        },
      }),
      s.addKeyword(e.DATA_SOURCE_IMAGE_SIZE_IS_UNDER_100KB, {
        validate: function (t, n) {
          return o(
            "WAFlowsDynamicDataValidationUtils",
          ).getImageSizeInDataSourceValidation(
            o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE,
            t,
            n,
          );
        },
      }),
      s.addKeyword(e.NAVIGATION_LIST_IMAGE_SIZE_IS_UNDER_100KB, {
        validate: function (t, n) {
          return t
            ? n.every(function (e) {
                try {
                  var t;
                  return ((t = e.start) == null ? void 0 : t.image) != null
                    ? o("isImageSizeUnderLimit").isImageSizeUnderLimit(
                        e.start.image,
                        o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE,
                      )
                    : !0;
                } catch (e) {
                  throw new (o(
                    "WAFlowsError",
                  ).WAFlowsInvalidBase64ValueToDecodeError)(
                    "Cannot decode the given value for the image src",
                  );
                }
              })
            : !0;
        },
      }),
      s.addKeyword(e.NAVIGATION_LIST_INVALID_END_ADDON, {
        validate: function (t, n) {
          if (t && n.end != null) {
            var e = n.end;
            if (
              (e.title != null ||
                e.description != null ||
                e.metadata != null) &&
              n.badge != null
            )
              return !1;
          }
          return !0;
        },
      }),
      s.addKeyword(e.NAVIGATION_LIST_INVALID_BADGE_COUNT, {
        validate: function (t, n) {
          return t && n.length > 0
            ? n.filter(function (e) {
                return e.badge != null;
              }).length <= 1
            : !0;
        },
      }),
      s.addKeyword(e.NAVIGATION_LIST_INVALID_MEDIA_SIZE_AND_ADDON, {
        validate: function (t, n) {
          if (t && n.mediaSize != null) {
            var e =
              n.mediaSize ===
              o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType
                .LARGE;
            if (e)
              return !n.listItems.some(function (e) {
                return e.end != null;
              });
          }
          return !0;
        },
      }),
      s.addKeyword(e.NAVIGATION_LIST_END_ADD_ON, {
        validate: function (t, n) {
          if (t && n.length > 0) {
            var e = n.reduce(
                function (e, t) {
                  if (t.end == null)
                    return { all: e.all && !1, none: e.none && !0 };
                  var n =
                    t.end.title != null ||
                    t.end.description != null ||
                    t.end.metadata != null;
                  return { all: e.all && n, none: e.none && !n };
                },
                { all: !0, none: !0 },
              ),
              r = e.all,
              o = e.none;
            return r || o;
          }
          return !0;
        },
      }),
      s.addKeyword(e.DROPDOWN_DATA_SOURCE_MAX_ITEMS_IMAGES, {
        validate: function (t, n) {
          if (t && Array.isArray(n.dataSource)) {
            var e = n.dataSource.some(function (e) {
              return e.image != null;
            });
            return e
              ? n.dataSource.length <=
                  o("WAFlowsComponentConstants").DROPDOWN_MAX_OPTIONS_IMAGES
              : !0;
          }
          return !0;
        },
      }),
      s.addKeyword(e.DROPDOWN_DATA_SOURCE_MAX_ITEMS, {
        validate: function (t, n) {
          if (t && Array.isArray(n.dataSource)) {
            var e = n.dataSource.every(function (e) {
              return e.image == null;
            });
            return e
              ? n.dataSource.length <=
                  o("WAFlowsComponentConstants").DROPDOWN_MAX_OPTIONS
              : !0;
          }
          return !0;
        },
      }),
      s.addKeyword(e.ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR, {
        validate: function (t, n) {
          if (Array.isArray(n.dataSource)) {
            var e = n.dataSource.some(function (e) {
              return e.onSelect != null && typeof e.onSelect == "function";
            });
            if (e) return n.onSelect == null;
          }
          return !0;
        },
      }),
      s.addKeyword(e.ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR, {
        validate: function (t, n) {
          if (Array.isArray(n.dataSource)) {
            var e = n.dataSource.some(function (e) {
              return e.onUnselect != null && typeof e.onUnselect == "function";
            });
            if (e) return n.onUnselect == null;
          }
          return !0;
        },
      }));
    var m = {
      validate: function (t, n) {
        return t
          ? typeof n == "string"
            ? n.length <= t
            : n["start-date"].length <= t && n["end-date"].length <= t
          : !0;
      },
    };
    (s.addKeyword(e.ON_CLICK_ACTION_EXCLUSIVE_VALIDATOR, {
      validate: function (t, n) {
        if (Array.isArray(n.listItems)) {
          var e = n.listItems.some(function (e) {
            return e.onClick != null && typeof e.onClick == "function";
          });
          if (e) return n.onClick == null;
        }
        return !0;
      },
    }),
      s.addKeyword(e.ON_CLICK_ACTION_MISSING_VALIDATOR, {
        validate: function (t, n) {
          if (Array.isArray(n.listItems)) {
            var e = n.onClick != null && typeof n.onClick == "function",
              r = n.listItems.every(function (e) {
                return e.onClick != null && typeof e.onClick == "function";
              });
            return r || e;
          }
          return !0;
        },
      }),
      s.addKeyword(e.PROPERTIES_COUNT_VALIDATOR, {
        validate: function (t, n) {
          var e = t.maximum,
            r = t.minimum;
          return r != null && e != null
            ? Object.keys(n).length > r && Object.keys(n).length <= e
            : r != null
              ? Object.keys(n).length > r
              : e != null
                ? Object.keys(n).length <= e
                : !0;
        },
      }),
      s.addKeyword(e.CALENDAR_PICKER_MAX_LENGTH_LABEL, m),
      s.addKeyword(e.CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT, m),
      s.addKeyword(e.TEXT_ENTRY_LABEL_MAX_LENGTH, {
        validate: function (t, n) {
          var e =
            n.labelVariant ===
            o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant
              .LARGE
              ? o("WAFlowsComponentConstants").TEXT_ENTRY_LABEL_LARGE_MAX_LENGTH
              : o("WAFlowsComponentConstants").TEXT_ENTRY_LABEL_MAX_LENGTH;
          return n.label ? n.label.length <= e : !0;
        },
      }),
      s.addKeyword(e.SEAT_LABEL_MAX_LENGTH, {
        validate: function (t, n) {
          var e = r("unsafeCast")(n),
            a = e.seatMap;
          return Array.isArray(a)
            ? a.every(function (e) {
                return (
                  !Array.isArray(e) ||
                  e.every(function (e) {
                    return (
                      typeof (e == null ? void 0 : e.label) != "string" ||
                      e.label.length <=
                        o("WAFlowsComponentConstants")
                          .SEAT_SELECTOR_SEAT_LABEL_MAX_LENGTH
                    );
                  })
                );
              })
            : !0;
        },
      }));
    var p = s;
    l.default = p;
  },
  98,
);
