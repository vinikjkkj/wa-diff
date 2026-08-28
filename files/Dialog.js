__d(
  "Dialog",
  [
    "fbt",
    "Animation",
    "Arbiter",
    "AsyncRequest",
    "Button",
    "CSS",
    "ContextualThing",
    "DOM",
    "Env",
    "Event",
    "FBLogger",
    "Focus",
    "Form",
    "HTML",
    "Keys",
    "Locale",
    "PageTransitions",
    "Parent",
    "Run",
    "ServerJS",
    "Style",
    "URI",
    "Vector",
    "bind",
    "createArrayFromMixed",
    "emptyFunction",
    "getObjectValues",
    "getOverlayZIndex",
    "goURI",
    "removeFromArray",
    "shield",
    "vulture",
  ],
  function $module_Dialog(
    global,
    require,
    importDefault,
    importNamespace,
    requireLazy,
    module,
    exports,
    fbt,
  ) {
    var _importDefault_closure_Env,
      _importDefault_closure_URI,
      _supportsPositionFixed = function () {
        var e = document.body;
        if (!e) return !1;
        var t = document.createElement("div"),
          n = document.createElement("div");
        (e.insertBefore(t, e.firstChild),
          e.insertBefore(n, e.firstChild),
          (t.style.position = "fixed"),
          (t.style.top = "20px"));
        var r = t.offsetTop !== n.offsetTop;
        return (
          e.removeChild(t),
          e.removeChild(n),
          (_supportsPositionFixed =
            importDefault("emptyFunction").thatReturns(r)),
          r
        );
      },
      _Dialog = (function () {
        function Dialog(e) {
          var t = this;
          ((this._renderDialog = function () {
            if (
              (t._updateZIndex(),
              t._pushOntoStack(),
              (t._obj.style.height = null),
              t._obj && t._obj.style.display
                ? ((t._obj.style.visibility = "hidden"),
                  (t._obj.style.display = ""),
                  t.resetDialogPosition(),
                  (t._obj.style.visibility = ""),
                  (t._obj.dialog = t))
                : t.resetDialogPosition(),
              clearInterval(t.active_hiding),
              (t.active_hiding = setInterval(t._activeResize.bind(t), 500)),
              (t._submit_on_enter = !1),
              t._auto_focus)
            ) {
              var e = importNamespace("Form").getFirstElement(t._content, [
                'input[type="text"]',
                "textarea",
                'input[type="password"]',
              ]);
              e
                ? setTimeout(
                    importNamespace("Form").focusFirst.bind(t, t._content),
                    0,
                  )
                : (t._submit_on_enter = !0);
            }
            var n =
              importDefault("Vector").getElementDimensions(t._content).y +
              importDefault("Vector").getElementPosition(t._content).y;
            return (
              Dialog._bottoms.push(n),
              (t._bottom = n),
              Dialog._updateMaxBottom(),
              t
            );
          }),
            (this._activeResize = function () {
              t.last_offset_height != t._content.offsetHeight &&
                ((t.last_offset_height = t._content.offsetHeight),
                t.resetDialogPosition());
            }),
            (this._hide = function (e) {
              t._obj && (t._obj.style.display = "none");
              var n = document.documentElement;
              if (
                (n &&
                  importNamespace("CSS").removeClass(
                    n,
                    "generic_dialog_overflow_mode",
                  ),
                clearInterval(t.active_hiding),
                t._bottom)
              ) {
                var r = Dialog._bottoms;
                (r.splice(r.indexOf(t._bottom), 1), Dialog._updateMaxBottom());
              }
              (t._previous_focus &&
                document.activeElement &&
                importDefault("DOM").contains(t._obj, document.activeElement) &&
                importNamespace("Focus").set(t._previous_focus),
                !e && t.destroy());
            }),
            (this._handleButton = function (e) {
              if (
                (typeof e == "string" &&
                  (e = Dialog._findButton(t._buttons, e)),
                !!e)
              ) {
                if (
                  (e.href != null && importDefault("goURI")(e.href, !0),
                  e.sjsp != null)
                ) {
                  var n = e.sjsp;
                  new (importDefault("ServerJS"))().handle(n);
                }
                var r = Dialog.call_or_eval(e, e.handler);
                r !== !1 &&
                  (e.name == "cancel"
                    ? t.cancel()
                    : t._handler_sjsp != null
                      ? (new (importDefault("ServerJS"))().handle(
                          t._handler_sjsp,
                        ),
                        t.hide())
                      : Dialog.call_or_eval(t, t._handler, { button: e }) !==
                          !1 && t.hide());
              }
            }),
            (this._submitForm = function (e, n, r) {
              var o = t.getFormData();
              (r && (o[r.name] = r.name),
                t._extra_data && Object.assign(o, t._extra_data));
              var a = new (importDefault("AsyncRequest"))()
                .setURI(n)
                .setData(o)
                .setMethod(e)
                .setNectarModuleDataSafe(t._causal_elem)
                .setReadOnly(e == "GET");
              return (t.setAsync(a), !1);
            }),
            (this._pushOntoStack = function () {
              var e = Dialog._stack;
              (e.length ||
                importDefault("Arbiter").inform("layer_shown", {
                  type: "Dialog",
                }),
                importDefault("removeFromArray")(e, t),
                e.push(t));
              for (var n = e.length - 2; n >= 0; n--) {
                var r = e[n];
                !r._is_stackable && !r._async_request
                  ? r._hide()
                  : r._shown_while_stacked || r._hide(!0);
              }
            }),
            (this._show_loading = !0),
            (this._auto_focus = !0),
            (this._submit_on_enter = !1),
            (this._fade_enabled = !0),
            (this._onload_handlers = []),
            (this._top = 125),
            (this._uniqueID = "dialog_" + Dialog._globalCount++),
            (this._content = null),
            (this._obj = null),
            (this._popup = null),
            (this._overlay = null),
            (this._causal_elem = null),
            (this._previous_focus = null),
            (this._buttons = []),
            this._buildDialog(),
            e && this._setFromModel(e),
            Dialog._init());
        }
        var _proto = Dialog.prototype;
        return (
          (_proto.show = function () {
            return (
              (this._showing = !0),
              this._async_request
                ? this._show_loading && this.showLoading()
                : this._update(),
              this
            );
          }),
          (_proto.showLoading = function () {
            return (
              (this._loading = !0),
              importNamespace("CSS").addClass(
                this._frame,
                "dialog_loading_shown",
              ),
              this._renderDialog(),
              this
            );
          }),
          (_proto.hide = function () {
            return !this._showing && !this._loading
              ? this
              : ((this._showing = !1),
                this._autohide_timeout &&
                  (clearTimeout(this._autohide_timeout),
                  (this._autohide_timeout = null)),
                this._fade_enabled && Dialog._stack.length <= 1
                  ? this._fadeOut()
                  : this._hide(),
                this);
          }),
          (_proto.cancel = function () {
            (!this._cancelHandler || this._cancelHandler() !== !1) &&
              this.hide();
          }),
          (_proto.getRoot = function () {
            return this._obj;
          }),
          (_proto.getBody = function () {
            return importDefault("DOM").scry(this._obj, "div.dialog_body")[0];
          }),
          (_proto.getButtonElement = function (t) {
            if (
              (typeof t == "string" &&
                (t = Dialog._findButton(this._buttons, t)),
              !t || !t.name)
            )
              return null;
            var e = importDefault("DOM").scry(this._popup, "input"),
              n = function (n) {
                return n.name == t.name;
              };
            return e.filter(n)[0] || null;
          }),
          (_proto.getContentNode = function () {
            return importDefault("DOM").find(
              this._content,
              "div.dialog_content",
            );
          }),
          (_proto.getFormData = function () {
            return importNamespace("Form").serialize(this.getContentNode());
          }),
          (_proto.setAllowCrossPageTransition = function (t) {
            return ((this._cross_transition = t), this);
          }),
          (_proto.setAllowCrossQuicklingNavigation = function (t) {
            return ((this._cross_quickling = t), this);
          }),
          (_proto.setShowing = function () {
            return (this.show(), this);
          }),
          (_proto.setHiding = function () {
            return (this.hide(), this);
          }),
          (_proto.setTitle = function (t) {
            var e = this._nodes.title,
              n = this._nodes.title_inner,
              r = this._nodes.content;
            return (
              importDefault("DOM").setContent(n, this._format(t || "", !0)),
              importNamespace("CSS").conditionShow(e, !!t),
              importNamespace("CSS").conditionClass(
                r,
                "dialog_content_titleless",
                !t,
              ),
              this
            );
          }),
          (_proto.setInvertTitleColor = function (t) {
            return (
              importDefault("vulture")("eSjzkBq4yY8mNTWhjoI0h_-HEXA="),
              t
                ? (this._nodes.title.className = "dialog_title_inverted")
                : (this._nodes.title.className = "dialog_title"),
              this
            );
          }),
          (_proto.setBody = function (t) {
            return (
              importDefault("DOM").setContent(
                this._nodes.body,
                this._format(t),
              ),
              this
            );
          }),
          (_proto.setHiddenFields = function (t) {
            return (
              importDefault("DOM").setContent(
                this._nodes.hidden_fields,
                this._format(t),
              ),
              this
            );
          }),
          (_proto.setExtraData = function (t) {
            return ((this._extra_data = t), this);
          }),
          (_proto.setReturnData = function (t) {
            return ((this._return_data = t), this);
          }),
          (_proto.setShowLoading = function (t) {
            return ((this._show_loading = t), this);
          }),
          (_proto.setFullBleed = function (t) {
            return (
              (this._full_bleed = t),
              this._updateWidth(),
              importNamespace("CSS").conditionClass(this._obj, "full_bleed", t),
              this
            );
          }),
          (_proto.setCausalElement = function (t) {
            return ((this._causal_elem = t), this);
          }),
          (_proto.setUserData = function (t) {
            return ((this._user_data = t), this);
          }),
          (_proto.getUserData = function () {
            return this._user_data;
          }),
          (_proto.setAutohide = function (t) {
            return (
              t
                ? this._showing
                  ? (this._autohide_timeout = setTimeout(
                      importDefault("shield")(this.hide, this),
                      t,
                    ))
                  : (this._autohide = t)
                : ((this._autohide = null),
                  this._autohide_timeout &&
                    (clearTimeout(this._autohide_timeout),
                    (this._autohide_timeout = null))),
              this
            );
          }),
          (_proto.setSummary = function (t) {
            var e = this._nodes.summary;
            return (
              importDefault("DOM").setContent(e, this._format(t || "")),
              importNamespace("CSS").conditionShow(e, !!t),
              this
            );
          }),
          (_proto.setButtons = function (t) {
            var e, n;
            Array.isArray(t) ? (e = t) : (e = Array.from(arguments));
            for (var r = 0; r < e.length; ++r) {
              var o = e[r];
              typeof o == "string" &&
                ((n = Dialog._findButton(Dialog._STANDARD_BUTTONS, o)),
                (e[r] = n));
            }
            this._buttons = e;
            var a = [];
            if (e && e.length > 0) {
              for (var i = 0; i < e.length; i++)
                if (((n = e[i]), !!n)) {
                  var l = importDefault("DOM").create("input", {
                      type: "button",
                      name: n.name || "",
                      value: n.label,
                    }),
                    s = importDefault("DOM").create(
                      "label",
                      { className: "uiButton uiButtonLarge uiButtonConfirm" },
                      l,
                    );
                  (n.className &&
                    (n.className.split(/\s+/).forEach(function (e) {
                      importNamespace("CSS").addClass(s, e);
                    }),
                    importNamespace("CSS").hasClass(s, "inputaux") &&
                      (importNamespace("CSS").removeClass(s, "inputaux"),
                      importNamespace("CSS").removeClass(s, "uiButtonConfirm")),
                    importNamespace("CSS").hasClass(s, "uiButtonSpecial") &&
                      importNamespace("CSS").removeClass(s, "uiButtonConfirm")),
                    n.icon &&
                      importDefault("DOM").prependContent(
                        s,
                        importDefault("DOM").create("img", {
                          src: n.icon,
                          className: "img mrs",
                        }),
                      ),
                    n.disabled && importDefault("Button").setEnabled(s, !1),
                    importDefault("Event").listen(
                      l,
                      "click",
                      this._handleButton.bind(this, n.name),
                    ));
                  for (var u in n)
                    u.indexOf("data-") === 0 &&
                      u.length > 5 &&
                      l.setAttribute(u, n[u]);
                  a.push(s);
                }
            }
            return (
              importDefault("DOM").setContent(this._nodes.buttons, a),
              this._updateButtonVisibility(),
              this
            );
          }),
          (_proto.setButtonsMessage = function (t) {
            return (
              importDefault("DOM").setContent(
                this._nodes.button_message,
                this._format(t || ""),
              ),
              (this._has_button_message = !!t),
              this._updateButtonVisibility(),
              this
            );
          }),
          (_proto._updateButtonVisibility = function () {
            var e = this._buttons.length > 0 || this._has_button_message;
            (importNamespace("CSS").conditionShow(
              this._nodes.button_wrapper,
              e,
            ),
              importNamespace("CSS").conditionClass(
                this._obj,
                "omitDialogFooter",
                !e,
              ));
          }),
          (_proto.setClickButtonOnEnter = function (t, n) {
            var e = this;
            return (
              (this._clickOnEnterTarget = t),
              this._clickOnEnterListener ||
                (this._clickOnEnterListener = importDefault("Event").listen(
                  this._nodes.body,
                  "keypress",
                  function (t) {
                    var r = t.getTarget();
                    return (
                      r &&
                        r.id === e._clickOnEnterTarget &&
                        importDefault("Event").getKeyCode(t) ===
                          importDefault("Keys").RETURN &&
                        (e._handleButton(n), t.kill()),
                      !0
                    );
                  },
                )),
              this
            );
          }),
          (_proto.setStackable = function (t, n) {
            return (
              (this._is_stackable = t),
              (this._shown_while_stacked = t && n),
              this
            );
          }),
          (_proto.setHandler = function (t) {
            return ((this._handler = t), this);
          }),
          (_proto.setHandlerSJSP = function (t) {
            return ((this._handler_sjsp = t), this);
          }),
          (_proto.setCancelHandler = function (t) {
            return (
              (this._cancelHandler = Dialog.call_or_eval.bind(null, this, t)),
              this
            );
          }),
          (_proto.setCloseHandler = function (t) {
            return (
              (this._close_handler = Dialog.call_or_eval.bind(null, this, t)),
              this
            );
          }),
          (_proto.setCloseHandlerSJSP = function (t) {
            return ((this._close_sjsp = t), this);
          }),
          (_proto.clearHandler = function () {
            return this.setHandler(null);
          }),
          (_proto.setPostURI = function (t, n, r) {
            var e = this;
            return (
              n === void 0 && (n = !0),
              r &&
              (
                _importDefault_closure_Env ||
                (_importDefault_closure_Env = importDefault("Env"))
              ).isCQuick
                ? (importDefault("PageTransitions").go(t), this)
                : (n
                    ? this.setHandler(this._submitForm.bind(this, "POST", t))
                    : this.setHandler(function () {
                        (importNamespace("Form").post(t, e.getFormData()),
                          e.hide());
                      }),
                  this)
            );
          }),
          (_proto.setGetURI = function (t) {
            return (
              this.setHandler(this._submitForm.bind(this, "GET", t)),
              this
            );
          }),
          (_proto.setModal = function (t) {
            return (
              (this._modal = t),
              importNamespace("CSS").conditionClass(
                this._obj,
                "generic_dialog_modal",
                t,
              ),
              this
            );
          }),
          (_proto.setSemiModal = function (t) {
            var e = this;
            return (
              t
                ? (this.setModal(!0),
                  (this._semiModalListener = importDefault("Event").listen(
                    this._obj,
                    "click",
                    function (t) {
                      importDefault("DOM").contains(e._popup, t.getTarget()) ||
                        e.hide();
                    },
                  )))
                : this._semiModalListener && this._semiModalListener.remove(),
              (this._semi_modal = t),
              this
            );
          }),
          (_proto.setWideDialog = function (t) {
            return ((this._wide_dialog = t), this._updateWidth(), this);
          }),
          (_proto.setContentWidth = function (t) {
            return ((this._content_width = t), this._updateWidth(), this);
          }),
          (_proto.setTitleLoading = function (t) {
            t === void 0 && (t = !0);
            var e = importDefault("DOM").find(this._popup, "h2.dialog_title");
            return (
              e && importNamespace("CSS").conditionClass(e, "loading", t),
              this
            );
          }),
          (_proto.setSecure = function (t) {
            return (
              importNamespace("CSS").conditionClass(
                this._nodes.title,
                "secure",
                t,
              ),
              this
            );
          }),
          (_proto.setClassName = function (t) {
            var e = this;
            return (
              t.split(/\s+/).forEach(function (t) {
                return importNamespace("CSS").addClass(e._obj, t);
              }),
              this
            );
          }),
          (_proto.setFadeEnabled = function (t) {
            return ((this._fade_enabled = t), this);
          }),
          (_proto.setFooter = function (t) {
            var e = this._nodes.footer;
            return (
              importDefault("DOM").setContent(e, this._format(t || "")),
              importNamespace("CSS").conditionShow(e, !!t),
              this
            );
          }),
          (_proto.setAutoFocus = function (t) {
            return ((this._auto_focus = t), this);
          }),
          (_proto.setTop = function (t) {
            return ((this._top = t), this._resetDialogObj(), this);
          }),
          (_proto.onloadRegister = function (t) {
            var e = this;
            return (
              importDefault("createArrayFromMixed")(t).forEach(function (t) {
                (typeof t == "string" &&
                  (importDefault("FBLogger")("fb_desktop_web").warn(
                    "Dialog.js Function usage: " + t,
                  ),
                  (t = new Function(t))),
                  e._onload_handlers.push(t.bind(e)));
              }),
              this
            );
          }),
          (_proto.onloadRegisterSJSP = function (t) {
            return ((this._onload_sjsp = t), this);
          }),
          (_proto.setAsyncURL = function (t) {
            return this.setAsync(new (importDefault("AsyncRequest"))(t));
          }),
          (_proto.setAsync = function (t) {
            var e = this,
              n = function (r) {
                if (e._async_request == t) {
                  e._async_request = null;
                  var n = r.getPayload(),
                    o = n;
                  (e._loading && (e._showing = !0),
                    typeof o == "string" ? e.setBody(o) : e._setFromModel(o),
                    e._update());
                }
              },
              r = t.getData();
            ((r.__d = 1), t.setData(r));
            var o = t.getHandler() || importDefault("emptyFunction");
            t.setHandler(function (e) {
              (o(e), n(e));
            });
            var a = t,
              i = a.getErrorHandler() || importDefault("emptyFunction"),
              l =
                a.getTransportErrorHandler() || importDefault("emptyFunction"),
              s = function () {
                ((e._async_request = null),
                  (e._loading = !1),
                  e._showing && e._shown_while_stacked
                    ? e._update()
                    : e._hide(e._is_stackable));
              },
              u = a.getServerDialogCancelHandler() || s;
            return (
              a
                .setAllowCrossPageTransition(this._cross_transition)
                .setErrorHandler(function (e) {
                  (s(), i(e));
                })
                .setTransportErrorHandler(function (e) {
                  (s(), l(e));
                })
                .setServerDialogCancelHandler(u),
              t.send(),
              (this._async_request = t),
              this._showing && this.show(),
              this
            );
          }),
          (_proto._format = function (t, n) {
            return (
              n === void 0 && (n = !1),
              typeof t == "string"
                ? n || (t = importDefault("HTML")(t))
                : (t = importDefault("HTML").replaceJSONWrapper(t)),
              t instanceof importDefault("HTML") && t.setDeferred(!0),
              t
            );
          }),
          (_proto._update = function () {
            this._showing &&
              (this._autohide &&
                !this._async_request &&
                !this._autohide_timeout &&
                (this._autohide_timeout = setTimeout(
                  importDefault("bind")(this, "hide"),
                  this._autohide,
                )),
              importNamespace("CSS").removeClass(
                this._frame,
                "dialog_loading_shown",
              ),
              (this._loading = !1),
              this._renderDialog(),
              this._runOnloads(),
              (this._previous_focus = document.activeElement),
              importNamespace("Focus").set(this._frame));
          }),
          (_proto._runOnloads = function () {
            if (this._onload_sjsp != null) {
              var e = this._onload_sjsp;
              (new (importDefault("ServerJS"))().handle(e),
                (this._onload_sjsp = null));
            }
            if (this._onload_handlers != null) {
              for (var t = 0; t < this._onload_handlers.length; ++t)
                try {
                  this._onload_handlers[t]();
                } catch (e) {}
              this._onload_handlers = [];
            }
          }),
          (_proto._updateWidth = function () {
            var e = 2 * (Dialog._BORDER_WIDTH + Dialog._HALO_WIDTH);
            (this._content_width
              ? ((e += this._content_width),
                this._full_bleed || (e += 2 * Dialog._PADDING_WIDTH))
              : this._wide_dialog
                ? (e += Dialog.SIZE.WIDE)
                : (e += Dialog.SIZE.STANDARD),
              (this._popup.style.width = e + "px"));
          }),
          (_proto._updateZIndex = function () {
            if (!this._hasSetZIndex && this._causal_elem) {
              for (
                var e = importDefault("getOverlayZIndex")(this._causal_elem),
                  t = this._causal_elem;
                !e && (t = importNamespace("ContextualThing").getContext(t));
              )
                e = importDefault("getOverlayZIndex")(t);
              ((this._hasSetZIndex = e > (this._modal ? 400 : 200)),
                importDefault("Style").set(
                  this._obj,
                  "z-index",
                  this._hasSetZIndex ? e : "",
                ));
            }
          }),
          (_proto._buildDialog = function () {
            ((this._obj = importDefault("DOM").create("div", {
              className: "generic_dialog",
              id: this._uniqueID,
            })),
              (this._obj.style.display = "none"),
              importDefault("DOM").appendContent(document.body, this._obj),
              this._popup ||
                (this._popup = importDefault("DOM").create("div", {
                  className: "generic_dialog_popup",
                })),
              this._obj.appendChild(this._popup),
              importNamespace("CSS").addClass(this._obj, "pop_dialog"),
              importNamespace("Locale").isRTL() &&
                importNamespace("CSS").addClass(this._obj, "pop_dialog_rtl"),
              importDefault("DOM").setContent(
                this._popup,
                importDefault("DOM").create(
                  "div",
                  { className: "pop_container_advanced" },
                  importDefault("DOM").create("div", {
                    className: "pop_content",
                    id: "pop_content",
                  }),
                ),
              ));
            var e = importDefault("DOM").find(this._popup, "div.pop_content");
            (e.setAttribute("tabIndex", "0"),
              e.setAttribute("role", "alertdialog"),
              (this._frame = this._content = e));
            var t = importDefault("DOM").create(
                "div",
                { className: "dialog_loading" },
                fbt._(/*BTDS*/ "Loading..."),
              ),
              n = importDefault("DOM").create("span"),
              r = importDefault("DOM").create(
                "h2",
                {
                  className: "dialog_title hidden_elem",
                  id: "title_" + this._uniqueID,
                },
                n,
              ),
              o = importDefault("DOM").create("div", {
                className: "dialog_summary hidden_elem",
              }),
              a = importDefault("DOM").create("div", {
                className: "dialog_body",
              }),
              i = importDefault("DOM").create("div", {
                className: "rfloat mlm",
              }),
              l = importDefault("DOM").create("div", {
                className: "dialog_buttons_msg",
              }),
              s = importDefault("DOM").create(
                "div",
                { className: "dialog_buttons clearfix hidden_elem" },
                [i, l],
              ),
              u = importDefault("DOM").create("div", {
                className: "dialog_footer hidden_elem",
              }),
              c = importDefault("DOM").create("div", {
                className: "hidden_elem",
              }),
              d = importDefault("DOM").create(
                "div",
                { className: "dialog_content" },
                [o, a, s, u, c],
              );
            ((this._nodes = {
              summary: o,
              body: a,
              buttons: i,
              button_message: l,
              button_wrapper: s,
              footer: u,
              hidden_fields: c,
              content: d,
              title: r,
              title_inner: n,
            }),
              importDefault("DOM").setContent(this._frame, [r, d, t]));
          }),
          (_proto.resetDialogPosition = function () {
            this._popup && this._resetDialogObj();
          }),
          (_proto._resetDialogObj = function () {
            var e = 2 * Dialog._PAGE_MARGIN,
              t = importDefault("Vector").getViewportDimensions(),
              n = t.x - e,
              r = t.y - e,
              o = 2 * Dialog._HALO_WIDTH,
              a = importDefault("Vector").getElementDimensions(this._content),
              i = a.x + o,
              l = a.y + o,
              s = this._top,
              u = n - i,
              c = r - l;
            c < 0
              ? (s = Dialog._PAGE_MARGIN)
              : s > c && (s = Dialog._PAGE_MARGIN + Math.max(c, 0) / 2);
            var d = _supportsPositionFixed();
            (d || (s += importDefault("Vector").getScrollPosition().y),
              importDefault("Style").set(this._popup, "marginTop", s + "px"));
            var m = d && (u < 0 || c < 0);
            importNamespace("CSS").conditionClass(
              this._obj,
              "generic_dialog_fixed_overflow",
              m,
            );
            var p = document.documentElement;
            p &&
              importNamespace("CSS").conditionClass(
                p,
                "generic_dialog_overflow_mode",
                m,
              );
          }),
          (_proto._fadeOut = function (t) {
            if (this._popup)
              try {
                new (importDefault("Animation"))(this._obj)
                  .duration(0)
                  .checkpoint()
                  .to("opacity", 0)
                  .hide()
                  .duration(250)
                  .ondone(this._hide.bind(this, t))
                  .go();
              } catch (e) {
                this._hide(t);
              }
          }),
          (_proto.destroy = function () {
            if (
              (this._popFromStack(),
              clearInterval(this.active_hiding),
              this._obj &&
                (importDefault("DOM").remove(this._obj), (this._obj = null)),
              this._clickOnEnterListener && this._clickOnEnterListener.remove(),
              this._close_handler &&
                this._close_handler({ return_data: this._return_data }),
              this._close_sjsp != null)
            ) {
              var e = this._close_sjsp;
              new (importDefault("ServerJS"))().handle(e);
            }
          }),
          (_proto._setFromModel = function (t) {
            var e = {};
            Object.assign(e, t);
            for (var n in e) {
              if (n == "onloadRegister") {
                this.onloadRegister(e[n]);
                continue;
              } else if (n == "onloadRegisterSJSP") {
                this.onloadRegisterSJSP(e[n]);
                continue;
              }
              var r = this["set" + n.substr(0, 1).toUpperCase() + n.substr(1)];
              r.apply(this, importDefault("createArrayFromMixed")(e[n]));
            }
          }),
          (_proto._updateBottom = function () {
            var e =
              importDefault("Vector").getElementDimensions(this._content).y +
              importDefault("Vector").getElementPosition(this._content).y;
            ((Dialog._bottoms[Dialog._bottoms.length - 1] = e),
              Dialog._updateMaxBottom());
          }),
          (_proto._popFromStack = function () {
            var e = Dialog._stack,
              t = e[e.length - 1] === this;
            (importDefault("removeFromArray")(e, this),
              e.length
                ? t && e[e.length - 1].show()
                : importDefault("Arbiter").inform("layer_hidden", {
                    type: "Dialog",
                  }));
          }),
          (Dialog._updateMaxBottom = function () {
            Dialog.max_bottom = Math.max.apply(Math, Dialog._bottoms);
          }),
          (Dialog.newButton = function (t, n, r, o) {
            var e = { name: t, label: n, className: void 0, handler: void 0 };
            return (r && (e.className = r), o && (e.handler = o), e);
          }),
          (Dialog.getCurrent = function () {
            var e = Dialog._stack;
            return e.length ? e[e.length - 1] : null;
          }),
          (Dialog.hideCurrent = function () {
            var e = Dialog.getCurrent();
            e && e.hide();
          }),
          (Dialog.hideFirstDialogButton = function () {
            var e = Dialog.getCurrent();
            e &&
              importNamespace("CSS").addClass(
                importDefault("DOM").scry(e.getRoot(), "div.dialog_buttons")[0],
                "hidden_elem",
              );
          }),
          (Dialog.bootstrap = function (t, n, r, o, a, i) {
            ((n = n || {}),
              Object.assign(
                n,
                new (
                  _importDefault_closure_URI ||
                  (_importDefault_closure_URI = importDefault("URI"))
                )(t).getQueryData(),
              ),
              (o = o || (r ? "GET" : "POST")));
            var e = importNamespace("Parent").byClass(i, "stat_elem") || i;
            if (
              (e && importNamespace("CSS").hasClass(e, "async_saving")) ||
              !(e instanceof HTMLElement)
            )
              return !1;
            var l = new (importDefault("AsyncRequest"))()
                .setReadOnly(!!r)
                .setMethod(o)
                .setRelativeTo(i)
                .setStatusElement(e)
                .setURI(t)
                .setNectarModuleDataSafe(i)
                .setData(n),
              s = new Dialog(a).setCausalElement(i).setAsync(l);
            return (s.show(), !1);
          }),
          (Dialog.showFromModel = function (t, n) {
            var e = new Dialog(t).setCausalElement(n).show();
            t.hiding && e.hide();
          }),
          (Dialog._init = function () {
            ((this._init = importDefault("emptyFunction")),
              importNamespace("Run").onLeave(
                importDefault("shield")(Dialog._tearDown, null, !1),
              ),
              importDefault("Arbiter").subscribe(
                "page_transition",
                importDefault("shield")(Dialog._tearDown, null, !0),
              ),
              importDefault("Event").listen(
                document.documentElement,
                "keydown",
                function (e) {
                  importDefault("Event").getKeyCode(e) ===
                    importDefault("Keys").ESC && !e.getModifiers().any
                    ? Dialog._escape() && e.kill()
                    : importDefault("Event").getKeyCode(e) ===
                        importDefault("Keys").RETURN &&
                      !e.getModifiers().any &&
                      Dialog._enter() &&
                      e.kill();
                },
              ),
              importDefault("Event").listen(window, "resize", function (e) {
                var t = Dialog.getCurrent();
                t && t._resetDialogObj();
              }));
          }),
          (Dialog._findButton = function (t, n) {
            if (t) {
              for (var e = 0; e < t.length; ++e)
                if (t[e].name == n) return t[e];
            }
            return null;
          }),
          (Dialog._tearDown = function (t) {
            for (var e = Dialog._stack.slice(), n = e.length - 1; n >= 0; n--)
              ((t && !e[n]._cross_transition) ||
                (!t && !e[n]._cross_quickling)) &&
                e[n].hide();
          }),
          (Dialog._escape = function () {
            var e = Dialog.getCurrent();
            if (!e) return !1;
            var t = e._semi_modal,
              n = e._buttons;
            if (!n.length && !t) return !1;
            if (t && !n.length) return (e.hide(), !0);
            var r,
              o = Dialog._findButton(n, "cancel");
            if (e._cancelHandler) return (e.cancel(), !0);
            if (o) r = o;
            else if (n.length === 1) r = n[0];
            else return !1;
            return (e._handleButton(r), !0);
          }),
          (Dialog._enter = function () {
            var e = Dialog.getCurrent();
            if (!e || !e._submit_on_enter || document.activeElement != e._frame)
              return !1;
            var t = e._buttons;
            return t ? (e._handleButton(t[0]), !0) : !1;
          }),
          (Dialog.call_or_eval = function call_or_eval(obj, func, args) {
            if (func) {
              if (((args = args || {}), typeof func == "string")) {
                var params = Object.keys(args).join(", ");
                (importDefault("FBLogger")("fb_desktop_web").warn(
                  "Dialog.js call_or_eval usage: " + func,
                ),
                  (func = eval(
                    "({f: function(" + params + ") { " + func + "}})",
                  ).f));
              }
              return func.apply(obj, importDefault("getObjectValues")(args));
            }
          }),
          Dialog
        );
      })();
    ((_Dialog.OK = { name: "ok", label: fbt._(/*BTDS*/ "OK") }),
      (_Dialog.CANCEL = {
        name: "cancel",
        label: fbt._(/*BTDS*/ "Cancel"),
        className: "inputaux",
      }),
      (_Dialog.CLOSE = { name: "close", label: fbt._(/*BTDS*/ "Close") }),
      (_Dialog.NEXT = { name: "next", label: fbt._(/*BTDS*/ "Next") }),
      (_Dialog.SAVE = { name: "save", label: fbt._(/*BTDS*/ "Save") }),
      (_Dialog.SUBMIT = { name: "submit", label: fbt._(/*BTDS*/ "Submit") }),
      (_Dialog.CONFIRM = { name: "confirm", label: fbt._(/*BTDS*/ "Confirm") }),
      (_Dialog.DELETE = { name: "delete", label: fbt._(/*BTDS*/ "Delete") }),
      (_Dialog._bottoms = [0]),
      (_Dialog.max_bottom = 0),
      (_Dialog._globalCount = 0),
      (_Dialog.OK_AND_CANCEL = [_Dialog.OK, _Dialog.CANCEL]),
      (_Dialog._STANDARD_BUTTONS = [
        _Dialog.OK,
        _Dialog.CANCEL,
        _Dialog.CLOSE,
        _Dialog.SAVE,
        _Dialog.SUBMIT,
        _Dialog.CONFIRM,
        _Dialog.DELETE,
      ]),
      (_Dialog.SIZE = { WIDE: 555, STANDARD: 445 }),
      (_Dialog._HALO_WIDTH = 10),
      (_Dialog._BORDER_WIDTH = 1),
      (_Dialog._PADDING_WIDTH = 10),
      (_Dialog._PAGE_MARGIN = 40),
      (_Dialog._stack = []),
      (global.Dialog = _Dialog),
      (exports.default = _Dialog));
  },
  226,
);
