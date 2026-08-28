__d(
  "CustomerBehaviorLoggerBase",
  [
    "$InternalEnum",
    "CustomerBehaviorRiskLoggingUtils",
    "FBPayUPLSessionIDGenerator",
    "isStringNullOrEmpty",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        ELAPSED_TIME_MS: "elapsed_time_ms",
        NUM_CHARS: "num_chars",
        BROWSER_TIMEZONE: "browser_timezone",
        INPUT_NAME_SOURCE: "input_name_source",
      }),
      s = n("$InternalEnum")({ CLOSE: "close", UNLOAD: "unload" });
    function u(e) {
      if (/^[0-9]$/.test(e)) return "0";
      if (/^[a-zA-Z]$/.test(e)) return "A";
      if (/^F([1-9]|1[0-2])$/.test(e)) return "F";
      if (/^[.,!?;:\'\"]$/.test(e)) return "P";
      if (/^[@#$%^&*()\-_+=\[\]{}\\|/?`~<>]$/.test(e)) return "Y";
      switch (e) {
        case "Backspace":
          return "B";
        case " ":
          return "S";
        case "Enter":
          return "E";
        case "Tab":
          return "T";
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          return "R";
        case "Delete":
          return "D";
        case "Shift":
        case "Control":
        case "Alt":
        case "Meta":
          return "M";
        case "Home":
        case "End":
        case "PageUp":
        case "PageDown":
          return "N";
        case "Escape":
          return "X";
        default:
          return "O";
      }
    }
    var c = "fi_consumer_risk_behavior",
      d = (function () {
        function t() {
          var t = this;
          ((this.usePubSub = !0),
            (this.$6 = function (e) {
              var n = e.target;
              if (n instanceof HTMLInputElement) {
                var r = t.$5(n);
                (t.$11(r),
                  t.$2(
                    babelHelpers.extends({}, t.$3(), {
                      consumer_behavior_event: "focusin",
                      event_extra_data: t.getLoggerExtraData(),
                      html_element_name: r.value,
                    }),
                  ));
              }
            }),
            (this.$7 = function (n) {
              var r = n.target;
              if (r instanceof HTMLInputElement) {
                var o = t.$5(r);
                (t.$11(o),
                  t.$12(o),
                  window.setTimeout(function () {
                    var n = r.value.length - t.charsLogged[o.value];
                    if (n > 0) {
                      var a;
                      (t.$2(
                        babelHelpers.extends({}, t.$3(), {
                          consumer_behavior_event: "paste",
                          event_extra_data: babelHelpers.extends(
                            {},
                            t.getLoggerExtraData(),
                            ((a = {}),
                            (a[e.NUM_CHARS] = n.toString()),
                            (a[e.INPUT_NAME_SOURCE] = o.source),
                            a),
                          ),
                          html_element_name: o.value,
                        }),
                      ),
                        (t.charsLogged[o.value] += n),
                        (t.inputValues[o.value] = r.value));
                    }
                  }),
                  delete t.typingStartTimes[o.value]);
              }
            }),
            (this.$8 = function (n) {
              var r,
                o = n.target;
              if (o instanceof HTMLInputElement) {
                n.key === "Backspace" && (t.backspaceClicked = !0);
                var a = t.$5(o);
                t.$11(a);
                var i = o.value;
                (i !== t.inputValues[a.value] &&
                  (t.typingStartTimes[a.value] == null &&
                    (t.typingStartTimes[a.value] = Date.now()),
                  (t.inputValues[a.value] = i)),
                  t.$2(
                    babelHelpers.extends({}, t.$3(), {
                      consumer_behavior_event: "keyup",
                      event_extra_data: babelHelpers.extends(
                        {},
                        t.getLoggerExtraData(),
                        ((r = {}),
                        (r[e.INPUT_NAME_SOURCE] = a.source),
                        (r.key = u(n.key)),
                        r),
                      ),
                      html_element_name: a.value,
                    }),
                  ));
              }
            }),
            (this.$9 = function (n) {
              var r,
                o = n.target;
              if (o instanceof HTMLInputElement) {
                var a = t.$5(o);
                (t.$12(a),
                  t.$2(
                    babelHelpers.extends({}, t.$3(), {
                      consumer_behavior_event: "focusout",
                      event_extra_data: babelHelpers.extends(
                        {},
                        t.getLoggerExtraData(),
                        ((r = {}), (r[e.INPUT_NAME_SOURCE] = a.source), r),
                      ),
                      html_element_name: a.value,
                    }),
                  ),
                  delete t.typingStartTimes[a.value]);
              }
            }),
            (this.$10 = function (n) {
              var r,
                o = n.target;
              if (o instanceof HTMLInputElement) {
                var a = t.$5(o);
                t.$2(
                  babelHelpers.extends({}, t.$3(), {
                    consumer_behavior_event: "click",
                    event_extra_data: babelHelpers.extends(
                      {},
                      t.getLoggerExtraData(),
                      ((r = {}),
                      (r[e.INPUT_NAME_SOURCE] = a.source),
                      (r.tagName = o.tagName.toLowerCase()),
                      r),
                    ),
                    html_element_name: a.value,
                  }),
                );
              }
            }),
            (this.detectUnload = function (e) {
              (e.preventDefault(), (e.returnValue = "true"), t.$13(s.UNLOAD));
            }),
            (this.$11 = function (e) {
              (t.charsLogged[e.value] == null && (t.charsLogged[e.value] = 0),
                t.inputValues[e.value] == null &&
                  (t.inputValues[e.value] = ""));
            }),
            (this.uplSessionID = o(
              "FBPayUPLSessionIDGenerator",
            ).sessionIDGenerator()),
            (this.inputValues = {}),
            (this.typingStartTimes = {}),
            (this.charsLogged = {}),
            (this.loggedEventTypes = new Set()),
            (this.backspaceClicked = !1));
        }
        var n = t.prototype;
        return (
          (n.init = function (n) {
            var t, r, o;
            ((this.sessionStartTime = Date.now()),
              n.uplSessionID != null && (this.uplSessionID = n.uplSessionID),
              this.flowSessionID == null &&
                (this.flowSessionID = n.flowSessionID),
              (this.secondary_account_id = n.businessID),
              (this.primary_account_id = n.paymentAccountID),
              (this.uri = (t = n.uri) != null ? t : document.location.href),
              this.uri == null &&
                this.$1("Unable to get required fields during initialization"),
              this.$2(
                babelHelpers.extends({}, this.$3(), {
                  consumer_behavior_event: "initialization",
                  event_extra_data: babelHelpers.extends(
                    {},
                    this.getLoggerExtraData(),
                    ((o = {}),
                    (o[e.BROWSER_TIMEZONE] =
                      (r = Intl.DateTimeFormat().resolvedOptions().timeZone) !=
                      null
                        ? r
                        : ""),
                    o),
                  ),
                }),
              ),
              this.$4());
          }),
          (n.$5 = function (t) {
            var e = t.getAttribute("name");
            if (!r("isStringNullOrEmpty")(e))
              return { source: "name", value: e };
            var n = t.getAttribute("data-testid");
            if (!r("isStringNullOrEmpty")(n))
              return { source: "data-testid", value: n };
            var o = t.getAttribute("data-autocomplete");
            return r("isStringNullOrEmpty")(o)
              ? t.id
                ? { source: "id", value: t.id }
                : { source: "unknown", value: "unknown" }
              : { source: "data-autocomplete", value: o };
          }),
          (n.$3 = function () {
            return {
              client_event_unix_time_ms: Date.now().toString(),
              event_id: r("uuidv4")(),
              falco_event: c,
              primary_account_id: this.primary_account_id,
              risk_session_id: this.flowSessionID,
              secondary_account_id: this.secondary_account_id,
              upl_session_id: this.uplSessionID,
              uri: this.uri,
              use_case_category: this.getUseCaseCategory(),
              use_case_subcategory: this.getUseCaseSubcategory(),
            };
          }),
          (n.shouldLog = function () {
            return !0;
          }),
          (n.getUseCaseCategory = function () {
            return "unknown";
          }),
          (n.getUseCaseSubcategory = function () {
            return null;
          }),
          (n.getLoggerExtraData = function () {
            return {};
          }),
          (n.$4 = function () {
            (document.addEventListener("focusin", this.$6),
              document.addEventListener("paste", this.$7),
              document.addEventListener("keyup", this.$8),
              document.addEventListener("focusout", this.$9),
              document.addEventListener("click", this.$10),
              window.addEventListener("beforeunload", this.detectUnload));
          }),
          (n.cleanup = function () {
            (document.removeEventListener("focusin", this.$6),
              document.removeEventListener("paste", this.$7),
              document.removeEventListener("keyup", this.$8),
              document.removeEventListener("focusout", this.$9),
              document.removeEventListener("click", this.$10),
              window.removeEventListener("beforeunload", this.detectUnload),
              this.$13(s.CLOSE),
              (this.inputValues = {}),
              (this.typingStartTimes = {}),
              (this.charsLogged = {}),
              (this.flowSessionID = null),
              (this.sessionStartTime = null),
              (this.loggedEventTypes = new Set()),
              (this.backspaceClicked = !1));
          }),
          (n.logButtonClick = function (t) {
            this.uri == null
              ? this.$1("Invalid button event", t)
              : this.$2(
                  babelHelpers.extends({}, this.$3(), {
                    consumer_behavior_event: "button",
                    event_extra_data: this.getLoggerExtraData(),
                    html_element_name: t.value,
                  }),
                );
          }),
          (n.$1 = function (n, r) {
            var t;
            this.$2(
              babelHelpers.extends({}, this.$3(), {
                consumer_behavior_event: "error_debugging_event",
                event_extra_data: babelHelpers.extends(
                  {},
                  this.getLoggerExtraData(),
                  ((t = {
                    chars_logged: JSON.stringify(this.charsLogged),
                    errorMessage: n,
                    typing_start_times: JSON.stringify(this.typingStartTimes),
                  }),
                  (t[e.INPUT_NAME_SOURCE] = r == null ? void 0 : r.source),
                  t),
                ),
                html_element_name: r == null ? void 0 : r.value,
              }),
            );
          }),
          (n.$12 = function (n) {
            var t =
                this.inputValues[n.value].length - this.charsLogged[n.value],
              r = this.typingStartTimes[n.value];
            if (
              (isNaN(t) && this.$1("Invalid typing event", n),
              t !== 0 && r != null)
            ) {
              var o;
              (this.$2(
                babelHelpers.extends({}, this.$3(), {
                  consumer_behavior_event: "typing",
                  event_extra_data: babelHelpers.extends(
                    {},
                    this.getLoggerExtraData(),
                    ((o = {}),
                    (o[e.ELAPSED_TIME_MS] = (Date.now() - r).toString()),
                    (o[e.NUM_CHARS] = t.toString()),
                    (o[e.INPUT_NAME_SOURCE] = n.source),
                    (o.backspaceClicked = this.backspaceClicked.toString()),
                    o),
                  ),
                  html_element_name: n.value,
                }),
              ),
                (this.charsLogged[n.value] += t));
            }
            this.backspaceClicked = !1;
          }),
          (n.$13 = function (n) {
            if (this.shouldLog()) {
              var t,
                r,
                o = babelHelpers.extends({}, this.getLoggerExtraData(), {
                  source: n,
                  startTime:
                    (t =
                      (r = this.sessionStartTime) == null
                        ? void 0
                        : r.toString()) != null
                      ? t
                      : "",
                }),
                a =
                  this.getUseCaseCategory() !== "billing_wizard" &&
                  this.loggedEventTypes.size <= 1 &&
                  this.loggedEventTypes.has("initialization");
              if (this.sessionStartTime != null && n === s.CLOSE && !a) {
                var i = this.sessionStartTime,
                  l = Date.now() - i;
                o[e.ELAPSED_TIME_MS] =
                  l < 0 ? Number.MAX_SAFE_INTEGER.toString() : l.toString();
              }
              this.$2(
                babelHelpers.extends({}, this.$3(), {
                  consumer_behavior_event: "cleanup",
                  event_extra_data: o,
                }),
              );
            }
          }),
          (n.$2 = function (t) {
            (t.consumer_behavior_event != null &&
              this.loggedEventTypes.add(t.consumer_behavior_event),
              this.usePubSub
                ? o(
                    "CustomerBehaviorRiskLoggingUtils",
                  ).emitCustomerBehaviorRiskEvent(t)
                : o(
                    "CustomerBehaviorRiskLoggingUtils",
                  ).logCustomerBehaviorRiskEvent(t));
          }),
          t
        );
      })();
    ((l.maskKeyValue = u), (l.CustomerBehaviorLoggerBase = d));
  },
  98,
);
