__d(
  "ReadableStreamPolyfill",
  [
    "MaybeNativePromise",
    "WritableStreamPolyfill",
    "stream-helpers",
    "stream-queue-with-sizes",
    "stream-utils",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = (e = n("stream-helpers")).ArrayBufferCopy,
      u = e.CreateIterResultObject,
      c = e.IsFiniteNonNegativeNumber,
      d = e.InvokeOrNoop,
      m = e.PromiseInvokeOrNoop,
      p = e.TransferArrayBuffer,
      _ = e.ValidateAndNormalizeQueuingStrategy,
      f = e.ValidateAndNormalizeHighWaterMark,
      g = e.createArrayFromList,
      h = e.createDataProperty,
      y = e.typeIsObject,
      C = e.assert,
      b = n("stream-utils").rethrowAssertionErrorRejection,
      v = n("stream-queue-with-sizes").DequeueValue,
      S = n("stream-queue-with-sizes").EnqueueValueWithSize,
      R = n("stream-queue-with-sizes").ResetQueue,
      L = (l = n("WritableStreamPolyfill")).AcquireWritableStreamDefaultWriter,
      E = l.IsWritableStream,
      k = l.IsWritableStreamLocked,
      I = l.WritableStreamAbort,
      T = l.WritableStreamDefaultWriterCloseWithErrorPropagation,
      D = l.WritableStreamDefaultWriterRelease,
      x = l.WritableStreamDefaultWriterWrite,
      $ = l.WritableStreamCloseQueuedOrInFlight,
      P = "[[CancelSteps]]",
      N = "[[PullSteps]]",
      M = (function () {
        function e(e, t) {
          e === void 0 && (e = {});
          var n = t === void 0 ? {} : t,
            r = n.size,
            o = n.highWaterMark;
          ((this._state = "readable"),
            (this._reader = void 0),
            (this._storedError = void 0),
            (this._disturbed = !1),
            (this._readableStreamController = void 0));
          var a = e.type,
            i = String(a);
          if (i === "bytes")
            (o === void 0 && (o = 0),
              (this._readableStreamController = new be(this, e, o)));
          else if (a === void 0)
            (o === void 0 && (o = 1),
              (this._readableStreamController = new ce(this, e, r, o)));
          else throw new RangeError("Invalid type is specified");
          Object.defineProperty &&
            Object.defineProperty(this, "locked", {
              get: this._isLocked.bind(this),
            });
        }
        var t = e.prototype;
        return (
          (t._isLocked = function () {
            if (F(this) === !1) throw Ge("locked");
            return B(this);
          }),
          (t.cancel = function (t) {
            return F(this) === !1
              ? n("MaybeNativePromise").reject(Ge("cancel"))
              : B(this) === !0
                ? n("MaybeNativePromise").reject(
                    new TypeError(
                      "Cannot cancel a stream that already has a reader",
                    ),
                  )
                : z(this, t);
          }),
          (t.getReader = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.mode;
            if (F(this) === !1) throw Ge("getReader");
            if (n === void 0) return A(this);
            if (((n = String(n)), n === "byob")) return w(this);
            throw new RangeError("Invalid mode is specified");
          }),
          (t.pipeThrough = function (t, n) {
            var e = t.writable,
              r = t.readable;
            if (e === void 0 || r === void 0)
              throw new TypeError(
                "readable and writable arguments must be defined",
              );
            var o = this.pipeTo(e, n);
            return (ot(o), r);
          }),
          (t.pipeTo = function (t, r) {
            var e = this,
              o = r === void 0 ? {} : r,
              a = o.preventClose,
              i = o.preventAbort,
              l = o.preventCancel;
            if (F(this) === !1)
              return n("MaybeNativePromise").reject(Ge("pipeTo"));
            if (E(t) === !1)
              return n("MaybeNativePromise").reject(
                new TypeError(
                  "ReadableStream.prototype.pipeTo's first argument must be a WritableStream",
                ),
              );
            if (((a = !!a), (i = !!i), (l = !!l), B(this) === !0))
              return n("MaybeNativePromise").reject(
                new TypeError(
                  "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream",
                ),
              );
            if (k(t) === !0)
              return n("MaybeNativePromise").reject(
                new TypeError(
                  "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream",
                ),
              );
            var s = A(this),
              u = L(t),
              c = !1,
              d = n("MaybeNativePromise").resolve();
            return new (n("MaybeNativePromise"))(function (r, o) {
              function m() {
                return (
                  (d = n("MaybeNativePromise").resolve()),
                  c === !0
                    ? n("MaybeNativePromise").resolve()
                    : u._readyPromise
                        .then(function () {
                          return ue(s).then(function (e) {
                            var t = e.value,
                              n = e.done;
                            n !== !0 && (d = x(u, t).catch(function () {}));
                          });
                        })
                        .then(m)
                );
              }
              if (
                (f(e, s._closedPromise, function (e) {
                  i === !1
                    ? h(
                        function () {
                          return I(t, e);
                        },
                        !0,
                        e,
                      )
                    : y(!0, e);
                }),
                f(t, u._closedPromise, function (t) {
                  l === !1
                    ? h(
                        function () {
                          return z(e, t);
                        },
                        !0,
                        t,
                      )
                    : y(!0, t);
                }),
                g(e, s._closedPromise, function () {
                  a === !1
                    ? h(function () {
                        return T(u);
                      })
                    : y();
                }),
                $(t) === !0 || t._state === "closed")
              ) {
                var p = new TypeError(
                  "the destination writable stream closed before all data could be piped to it",
                );
                l === !1
                  ? h(
                      function () {
                        return z(e, p);
                      },
                      !0,
                      p,
                    )
                  : y(!0, p);
              }
              m().catch(function (e) {
                ((d = n("MaybeNativePromise").resolve()), b(e));
              });
              function _() {
                var e = d;
                return d.then(function () {
                  return e !== d ? _() : void 0;
                });
              }
              function f(e, t, n) {
                e._state === "errored"
                  ? n(e._storedError)
                  : t.catch(n).catch(b);
              }
              function g(e, t, n) {
                e._state === "closed" ? n() : t.then(n).catch(b);
              }
              function h(e, n, r) {
                if (c === !0) return;
                ((c = !0),
                  t._state === "writable" && $(t) === !1 ? _().then(o) : o());
                function o() {
                  e()
                    .then(
                      function () {
                        return C(n, r);
                      },
                      function (e) {
                        return C(!0, e);
                      },
                    )
                    .catch(b);
                }
              }
              function y(e, n) {
                c !== !0 &&
                  ((c = !0),
                  t._state === "writable" && $(t) === !1
                    ? _()
                        .then(function () {
                          return C(e, n);
                        })
                        .catch(b)
                    : C(e, n));
              }
              function C(e, t) {
                (D(u), le(s), e ? o(t) : r(void 0));
              }
            });
          }),
          (t.tee = function () {
            if (F(this) === !1) throw Ge("tee");
            var e = W(this, !1);
            return g(e);
          }),
          e
        );
      })();
    a.exports = {
      ReadableStream: M,
      IsReadableStreamDisturbed: O,
      ReadableStreamDefaultControllerClose: _e,
      ReadableStreamDefaultControllerEnqueue: fe,
      ReadableStreamDefaultControllerError: ge,
      ReadableStreamDefaultControllerGetDesiredSize: ye,
    };
    function w(e) {
      return new ne(e);
    }
    function A(e) {
      return new te(e);
    }
    function F(e) {
      return !(
        !y(e) ||
        !Object.prototype.hasOwnProperty.call(e, "_readableStreamController")
      );
    }
    function O(e) {
      return (
        C(
          F(e) === !0,
          "IsReadableStreamDisturbed should only be used on known readable streams",
        ),
        e._disturbed
      );
    }
    function B(e) {
      return (
        C(
          F(e) === !0,
          "IsReadableStreamLocked should only be used on known readable streams",
        ),
        e._reader !== void 0
      );
    }
    function W(e, t) {
      (C(F(e) === !0), C(typeof t == "boolean"));
      var r = A(e),
        o = {
          closedOrErrored: !1,
          canceled1: !1,
          canceled2: !1,
          reason1: void 0,
          reason2: void 0,
        };
      o.promise = new (n("MaybeNativePromise"))(function (e) {
        o._resolve = e;
      });
      var a = q();
      ((a._reader = r), (a._teeState = o), (a._cloneForBranch2 = t));
      var i = U();
      ((i._stream = e), (i._teeState = o));
      var l = V();
      ((l._stream = e), (l._teeState = o));
      var s = Object.create(Object.prototype);
      (h(s, "pull", a), h(s, "cancel", i));
      var u = new M(s),
        c = Object.create(Object.prototype);
      (h(c, "pull", a), h(c, "cancel", l));
      var d = new M(c);
      return (
        (a._branch1 = u._readableStreamController),
        (a._branch2 = d._readableStreamController),
        r._closedPromise.catch(function (e) {
          o.closedOrErrored !== !0 &&
            (ge(a._branch1, e), ge(a._branch2, e), (o.closedOrErrored = !0));
        }),
        [u, d]
      );
    }
    function q() {
      function e() {
        var t = e._reader,
          n = e._branch1,
          r = e._branch2,
          o = e._teeState;
        return ue(t).then(function (e) {
          C(y(e));
          var t = e.value,
            a = e.done;
          if (
            (C(typeof a == "boolean"),
            a === !0 &&
              o.closedOrErrored === !1 &&
              (o.canceled1 === !1 && _e(n),
              o.canceled2 === !1 && _e(r),
              (o.closedOrErrored = !0)),
            o.closedOrErrored !== !0)
          ) {
            var i = t,
              l = t;
            (o.canceled1 === !1 && fe(n, i), o.canceled2 === !1 && fe(r, l));
          }
        });
      }
      return e;
    }
    function U() {
      function e(t) {
        var n = e._stream,
          r = e._teeState;
        if (((r.canceled1 = !0), (r.reason1 = t), r.canceled2 === !0)) {
          var o = g([r.reason1, r.reason2]),
            a = z(n, o);
          r._resolve(a);
        }
        return r.promise;
      }
      return e;
    }
    function V() {
      function e(t) {
        var n = e._stream,
          r = e._teeState;
        if (((r.canceled2 = !0), (r.reason2 = t), r.canceled1 === !0)) {
          var o = g([r.reason1, r.reason2]),
            a = z(n, o);
          r._resolve(a);
        }
        return r.promise;
      }
      return e;
    }
    function H(e) {
      (C(re(e._reader) === !0),
        C(e._state === "readable" || e._state === "closed"));
      var t = new (n("MaybeNativePromise"))(function (t, n) {
        var r = { _resolve: t, _reject: n };
        e._reader._readIntoRequests.push(r);
      });
      return t;
    }
    function G(e) {
      (C(oe(e._reader) === !0), C(e._state === "readable"));
      var t = new (n("MaybeNativePromise"))(function (t, n) {
        var r = { _resolve: t, _reject: n };
        e._reader._readRequests.push(r);
      });
      return t;
    }
    function z(e, t) {
      if (((e._disturbed = !0), e._state === "closed"))
        return n("MaybeNativePromise").resolve(void 0);
      if (e._state === "errored")
        return n("MaybeNativePromise").reject(e._storedError);
      j(e);
      var r = e._readableStreamController[P](t);
      return r.then(function () {});
    }
    function j(e) {
      (C(e._state === "readable"), (e._state = "closed"));
      var t = e._reader;
      if (t !== void 0) {
        if (oe(t) === !0) {
          for (var n of t._readRequests) {
            var r = n._resolve;
            r(u(void 0, !0));
          }
          t._readRequests = [];
        }
        Ze(t);
      }
    }
    function K(e, t) {
      (C(F(e) === !0, "stream must be ReadableStream"),
        C(e._state === "readable", "state must be readable"),
        (e._state = "errored"),
        (e._storedError = t));
      var n = e._reader;
      if (n !== void 0) {
        if (oe(n) === !0) {
          for (var r of n._readRequests) r._reject(t);
          n._readRequests = [];
        } else {
          C(re(n), "reader must be ReadableStreamBYOBReader");
          for (var o of n._readIntoRequests) o._reject(t);
          n._readIntoRequests = [];
        }
        (Ye(n, t), n._closedPromise.catch(function () {}));
      }
    }
    function Q(e, t, n) {
      var r = e._reader;
      C(r._readIntoRequests.length > 0);
      var o = r._readIntoRequests.shift();
      o._resolve(u(t, n));
    }
    function X(e, t, n) {
      var r = e._reader;
      C(r._readRequests.length > 0);
      var o = r._readRequests.shift();
      o._resolve(u(t, n));
    }
    function Y(e) {
      return e._reader._readIntoRequests.length;
    }
    function J(e) {
      return e._reader._readRequests.length;
    }
    function Z(e) {
      var t = e._reader;
      return !(t === void 0 || re(t) === !1);
    }
    function ee(e) {
      var t = e._reader;
      return !(t === void 0 || oe(t) === !1);
    }
    var te = (function () {
        function e(e) {
          if (F(e) === !1)
            throw new TypeError(
              "ReadableStreamDefaultReader can only be constructed with a ReadableStream instance",
            );
          if (B(e) === !0)
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader",
            );
          (ae(this, e),
            (this._readRequests = []),
            Object.defineProperty &&
              Object.defineProperty(this, "closed", {
                get: this._isClosed.bind(this),
              }));
        }
        var t = e.prototype;
        return (
          (t._isClosed = function () {
            return oe(this) === !1
              ? n("MaybeNativePromise").reject(je("closed"))
              : this._closedPromise;
          }),
          (t.cancel = function (t) {
            return oe(this) === !1
              ? n("MaybeNativePromise").reject(je("cancel"))
              : this._ownerReadableStream === void 0
                ? n("MaybeNativePromise").reject(ze("cancel"))
                : ie(this, t);
          }),
          (t.read = function () {
            return oe(this) === !1
              ? n("MaybeNativePromise").reject(je("read"))
              : this._ownerReadableStream === void 0
                ? n("MaybeNativePromise").reject(ze("read from"))
                : ue(this);
          }),
          (t.releaseLock = function () {
            if (oe(this) === !1) throw je("releaseLock");
            if (this._ownerReadableStream !== void 0) {
              if (this._readRequests.length > 0)
                throw new TypeError(
                  "Tried to release a reader lock when that reader has pending read() calls un-settled",
                );
              le(this);
            }
          }),
          e
        );
      })(),
      ne = (function () {
        function e(e) {
          if (!F(e))
            throw new TypeError(
              "ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source",
            );
          if (ve(e._readableStreamController) === !1)
            throw new TypeError(
              "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source",
            );
          if (B(e))
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader",
            );
          (ae(this, e),
            (this._readIntoRequests = []),
            Object.defineProperty &&
              Object.defineProperty(this, "closed", {
                get: this._isClosed.bind(this),
              }));
        }
        var t = e.prototype;
        return (
          (t._isClosed = function () {
            return re(this)
              ? this._closedPromise
              : n("MaybeNativePromise").reject(et("closed"));
          }),
          (t.cancel = function (t) {
            return re(this)
              ? this._ownerReadableStream === void 0
                ? n("MaybeNativePromise").reject(ze("cancel"))
                : ie(this, t)
              : n("MaybeNativePromise").reject(et("cancel"));
          }),
          (t.read = function (t) {
            return re(this)
              ? this._ownerReadableStream === void 0
                ? n("MaybeNativePromise").reject(ze("read from"))
                : ArrayBuffer.isView(t)
                  ? t.byteLength === 0
                    ? n("MaybeNativePromise").reject(
                        new TypeError("view must have non-zero byteLength"),
                      )
                    : se(this, t)
                  : n("MaybeNativePromise").reject(
                      new TypeError("view must be an array buffer view"),
                    )
              : n("MaybeNativePromise").reject(et("read"));
          }),
          (t.releaseLock = function () {
            if (!re(this)) throw et("releaseLock");
            if (this._ownerReadableStream !== void 0) {
              if (this._readIntoRequests.length > 0)
                throw new TypeError(
                  "Tried to release a reader lock when that reader has pending read() calls un-settled",
                );
              le(this);
            }
          }),
          e
        );
      })();
    function re(e) {
      return !(
        !y(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests")
      );
    }
    function oe(e) {
      return !(
        !y(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests")
      );
    }
    function ae(e, t) {
      ((e._ownerReadableStream = t),
        (t._reader = e),
        t._state === "readable"
          ? Ke(e)
          : t._state === "closed"
            ? Xe(e)
            : (C(t._state === "errored", "state must be errored"),
              Qe(e, t._storedError),
              e._closedPromise.catch(function () {})));
    }
    function ie(e, t) {
      var n = e._ownerReadableStream;
      return (C(n !== void 0), z(n, t));
    }
    function le(e) {
      (C(e._ownerReadableStream !== void 0),
        C(e._ownerReadableStream._reader === e),
        e._ownerReadableStream._state === "readable"
          ? Ye(
              e,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness",
              ),
            )
          : Je(
              e,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness",
              ),
            ),
        e._closedPromise.catch(function () {}),
        (e._ownerReadableStream._reader = void 0),
        (e._ownerReadableStream = void 0));
    }
    function se(e, t) {
      var r = e._ownerReadableStream;
      return (
        C(r !== void 0),
        (r._disturbed = !0),
        r._state === "errored"
          ? n("MaybeNativePromise").reject(r._storedError)
          : Ne(r._readableStreamController, t)
      );
    }
    function ue(e) {
      var t = e._ownerReadableStream;
      return (
        C(t !== void 0),
        (t._disturbed = !0),
        t._state === "closed"
          ? n("MaybeNativePromise").resolve(u(void 0, !0))
          : t._state === "errored"
            ? n("MaybeNativePromise").reject(t._storedError)
            : (C(t._state === "readable"), t._readableStreamController[N]())
      );
    }
    var ce = (function () {
      function e(e, t, r, o) {
        if (F(e) === !1)
          throw new TypeError(
            "ReadableStreamDefaultController can only be constructed with a ReadableStream instance",
          );
        if (e._readableStreamController !== void 0)
          throw new TypeError(
            "ReadableStreamDefaultController instances can only be created by the ReadableStream constructor",
          );
        ((this._controlledReadableStream = e),
          (this._underlyingSource = t),
          (this._queue = void 0),
          (this._queueTotalSize = void 0),
          R(this),
          (this._started = !1),
          (this._closeRequested = !1),
          (this._pullAgain = !1),
          (this._pulling = !1));
        var a = _(r, o);
        ((this._strategySize = a.size), (this._strategyHWM = a.highWaterMark));
        var i = this,
          l = d(t, "start", [this]);
        (n("MaybeNativePromise")
          .resolve(l)
          .then(
            function () {
              ((i._started = !0),
                C(i._pulling === !1),
                C(i._pullAgain === !1),
                me(i));
            },
            function (e) {
              he(i, e);
            },
          )
          .catch(b),
          Object.defineProperty &&
            Object.defineProperty(this, "desiredSize", {
              get: this._getDesiredSize.bind(this),
            }));
      }
      var t = e.prototype;
      return (
        (t._getDesiredSize = function () {
          if (de(this) === !1) throw tt("desiredSize");
          return ye(this);
        }),
        (t.close = function () {
          if (de(this) === !1) throw tt("close");
          if (this._closeRequested === !0)
            throw new TypeError(
              "The stream has already been closed; do not close it again!",
            );
          var e = this._controlledReadableStream._state;
          if (e !== "readable")
            throw new TypeError(
              "The stream (in " +
                e +
                " state) is not in the readable state and cannot be closed",
            );
          _e(this);
        }),
        (t.enqueue = function (t) {
          if (de(this) === !1) throw tt("enqueue");
          if (this._closeRequested === !0)
            throw new TypeError("stream is closed or draining");
          var e = this._controlledReadableStream._state;
          if (e !== "readable")
            throw new TypeError(
              "The stream (in " +
                e +
                " state) is not in the readable state and cannot be enqueued to",
            );
          return fe(this, t);
        }),
        (t.error = function (t) {
          if (de(this) === !1) throw tt("error");
          var e = this._controlledReadableStream;
          if (e._state !== "readable")
            throw new TypeError(
              "The stream is " + e._state + " and so cannot be errored",
            );
          ge(this, t);
        }),
        (t[P] = function (e) {
          return (R(this), m(this._underlyingSource, "cancel", [e]));
        }),
        (t[N] = function () {
          var e = this._controlledReadableStream;
          if (this._queue.length > 0) {
            var t = v(this);
            return (
              this._closeRequested === !0 && this._queue.length === 0
                ? j(e)
                : me(this),
              n("MaybeNativePromise").resolve(u(t, !1))
            );
          }
          var r = G(e);
          return (me(this), r);
        }),
        e
      );
    })();
    function de(e) {
      return !(
        !y(e) || !Object.prototype.hasOwnProperty.call(e, "_underlyingSource")
      );
    }
    function me(e) {
      var t = pe(e);
      if (t !== !1) {
        if (e._pulling === !0) {
          e._pullAgain = !0;
          return;
        }
        (C(e._pullAgain === !1), (e._pulling = !0));
        var n = m(e._underlyingSource, "pull", [e]);
        n.then(
          function () {
            if (((e._pulling = !1), e._pullAgain === !0))
              return ((e._pullAgain = !1), me(e));
          },
          function (t) {
            he(e, t);
          },
        ).catch(b);
      }
    }
    function pe(e) {
      var t = e._controlledReadableStream;
      if (
        t._state === "closed" ||
        t._state === "errored" ||
        e._closeRequested === !0 ||
        e._started === !1
      )
        return !1;
      if (B(t) === !0 && J(t) > 0) return !0;
      var n = ye(e);
      return n > 0;
    }
    function _e(e) {
      var t = e._controlledReadableStream;
      (C(e._closeRequested === !1),
        C(t._state === "readable"),
        (e._closeRequested = !0),
        e._queue.length === 0 && j(t));
    }
    function fe(e, t) {
      var n = e._controlledReadableStream;
      if (
        (C(e._closeRequested === !1),
        C(n._state === "readable"),
        B(n) === !0 && J(n) > 0)
      )
        X(n, t, !1);
      else {
        var r = 1;
        if (e._strategySize !== void 0) {
          var o = e._strategySize;
          try {
            r = o(t);
          } catch (t) {
            throw (he(e, t), t);
          }
        }
        try {
          S(e, t, r);
        } catch (t) {
          throw (he(e, t), t);
        }
      }
      me(e);
    }
    function ge(e, t) {
      var n = e._controlledReadableStream;
      (C(n._state === "readable"), R(e), K(n, t));
    }
    function he(e, t) {
      e._controlledReadableStream._state === "readable" && ge(e, t);
    }
    function ye(e) {
      var t = e._controlledReadableStream,
        n = t._state;
      return n === "errored"
        ? null
        : n === "closed"
          ? 0
          : e._strategyHWM - e._queueTotalSize;
    }
    var Ce = (function () {
        function e(e, t) {
          ((this._associatedReadableByteStreamController = e),
            (this._view = t),
            Object.defineProperty &&
              Object.defineProperty(this, "view", {
                get: this._getView.bind(this),
              }));
        }
        var t = e.prototype;
        return (
          (t._getView = function () {
            return this._view;
          }),
          (t.respond = function (t) {
            if (Se(this) === !1) throw nt("respond");
            if (this._associatedReadableByteStreamController === void 0)
              throw new TypeError("This BYOB request has been invalidated");
            Ve(this._associatedReadableByteStreamController, t);
          }),
          (t.respondWithNewView = function (t) {
            if (Se(this) === !1) throw nt("respond");
            if (this._associatedReadableByteStreamController === void 0)
              throw new TypeError("This BYOB request has been invalidated");
            if (!ArrayBuffer.isView(t))
              throw new TypeError(
                "You can only respond with array buffer views",
              );
            He(this._associatedReadableByteStreamController, t);
          }),
          e
        );
      })(),
      be = (function () {
        function e(e, t, r) {
          if (F(e) === !1)
            throw new TypeError(
              "ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source",
            );
          if (e._readableStreamController !== void 0)
            throw new TypeError(
              "ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source",
            );
          ((this._controlledReadableStream = e),
            (this._underlyingByteSource = t),
            (this._pullAgain = !1),
            (this._pulling = !1),
            Le(this),
            (this._queue = this._queueTotalSize = void 0),
            R(this),
            (this._closeRequested = !1),
            (this._started = !1),
            (this._strategyHWM = f(r)));
          var o = t.autoAllocateChunkSize;
          if (o !== void 0 && (Number.isInteger(o) === !1 || o <= 0))
            throw new RangeError(
              "autoAllocateChunkSize must be a positive integer",
            );
          ((this._autoAllocateChunkSize = o), (this._pendingPullIntos = []));
          var a = this,
            i = d(t, "start", [this]);
          (n("MaybeNativePromise")
            .resolve(i)
            .then(
              function () {
                ((a._started = !0),
                  C(a._pulling === !1),
                  C(a._pullAgain === !1),
                  Re(a));
              },
              function (t) {
                e._state === "readable" && qe(a, t);
              },
            )
            .catch(b),
            Object.defineProperty &&
              (Object.defineProperty(this, "byobRequest", {
                get: this._getByobRequest.bind(this),
              }),
              Object.defineProperty(this, "desiredSize", {
                get: this._getByobRequest.bind(this),
              })));
        }
        var t = e.prototype;
        return (
          (t._getByobRequest = function () {
            if (ve(this) === !1) throw rt("byobRequest");
            if (
              this._byobRequest === void 0 &&
              this._pendingPullIntos.length > 0
            ) {
              var e = this._pendingPullIntos[0],
                t = new Uint8Array(
                  e.buffer,
                  e.byteOffset + e.bytesFilled,
                  e.byteLength - e.bytesFilled,
                );
              this._byobRequest = new Ce(this, t);
            }
            return this._byobRequest;
          }),
          (t._getDesiredSize = function () {
            if (ve(this) === !1) throw rt("desiredSize");
            return Ue(this);
          }),
          (t.close = function () {
            if (ve(this) === !1) throw rt("close");
            if (this._closeRequested === !0)
              throw new TypeError(
                "The stream has already been closed; do not close it again!",
              );
            var e = this._controlledReadableStream._state;
            if (e !== "readable")
              throw new TypeError(
                "The stream (in " +
                  e +
                  " state) is not in the readable state and cannot be closed",
              );
            Be(this);
          }),
          (t.enqueue = function (t) {
            if (ve(this) === !1) throw rt("enqueue");
            if (this._closeRequested === !0)
              throw new TypeError("stream is closed or draining");
            var e = this._controlledReadableStream._state;
            if (e !== "readable")
              throw new TypeError(
                "The stream (in " +
                  e +
                  " state) is not in the readable state and cannot be enqueued to",
              );
            if (!ArrayBuffer.isView(t))
              throw new TypeError(
                "You can only enqueue array buffer views when using a ReadableByteStreamController",
              );
            We(this, t);
          }),
          (t.error = function (t) {
            if (ve(this) === !1) throw rt("error");
            var e = this._controlledReadableStream;
            if (e._state !== "readable")
              throw new TypeError(
                "The stream is " + e._state + " and so cannot be errored",
              );
            qe(this, t);
          }),
          (t[P] = function (e) {
            if (this._pendingPullIntos.length > 0) {
              var t = this._pendingPullIntos[0];
              t.bytesFilled = 0;
            }
            return (R(this), m(this._underlyingByteSource, "cancel", [e]));
          }),
          (t[N] = function () {
            var e = this._controlledReadableStream;
            if ((C(ee(e) === !0), this._queueTotalSize > 0)) {
              C(J(e) === 0);
              var t = this._queue.shift();
              ((this._queueTotalSize -= t.byteLength), xe(this));
              var r;
              try {
                r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
              } catch (e) {
                return n("MaybeNativePromise").reject(e);
              }
              return n("MaybeNativePromise").resolve(u(r, !1));
            }
            var o = this._autoAllocateChunkSize;
            if (o !== void 0) {
              var a;
              try {
                a = new ArrayBuffer(o);
              } catch (e) {
                return n("MaybeNativePromise").reject(e);
              }
              var i = {
                buffer: a,
                byteOffset: 0,
                byteLength: o,
                bytesFilled: 0,
                elementSize: 1,
                ctor: Uint8Array,
                readerType: "default",
              };
              this._pendingPullIntos.push(i);
            }
            var l = G(e);
            return (Re(this), l);
          }),
          e
        );
      })();
    function ve(e) {
      return !(
        !y(e) ||
        !Object.prototype.hasOwnProperty.call(e, "_underlyingByteSource")
      );
    }
    function Se(e) {
      return !(
        !y(e) ||
        !Object.prototype.hasOwnProperty.call(
          e,
          "_associatedReadableByteStreamController",
        )
      );
    }
    function Re(e) {
      var t = Oe(e);
      if (t !== !1) {
        if (e._pulling === !0) {
          e._pullAgain = !0;
          return;
        }
        (C(e._pullAgain === !1), (e._pulling = !0));
        var n = m(e._underlyingByteSource, "pull", [e]);
        n.then(
          function () {
            ((e._pulling = !1),
              e._pullAgain === !0 && ((e._pullAgain = !1), Re(e)));
          },
          function (t) {
            e._controlledReadableStream._state === "readable" && qe(e, t);
          },
        ).catch(b);
      }
    }
    function Le(e) {
      ($e(e), (e._pendingPullIntos = []));
    }
    function Ee(e, t) {
      C(e._state !== "errored", "state must not be errored");
      var n = !1;
      e._state === "closed" && (C(t.bytesFilled === 0), (n = !0));
      var r = ke(t);
      t.readerType === "default"
        ? X(e, r, n)
        : (C(t.readerType === "byob"), Q(e, r, n));
    }
    function ke(e) {
      var t = e.bytesFilled,
        n = e.elementSize;
      return (
        C(t <= e.byteLength),
        C(t % n === 0),
        new e.ctor(e.buffer, e.byteOffset, t / n)
      );
    }
    function Ie(e, t, n, r) {
      (e._queue.push({ buffer: t, byteOffset: n, byteLength: r }),
        (e._queueTotalSize += r));
    }
    function Te(e, t) {
      var n = t.elementSize,
        r = t.bytesFilled - (t.bytesFilled % n),
        o = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled),
        a = t.bytesFilled + o,
        i = a - (a % n),
        l = o,
        u = !1;
      i > r && ((l = i - t.bytesFilled), (u = !0));
      for (var c = e._queue; l > 0; ) {
        var d = c[0],
          m = Math.min(l, d.byteLength),
          p = t.byteOffset + t.bytesFilled;
        (s(t.buffer, p, d.buffer, d.byteOffset, m),
          d.byteLength === m
            ? c.shift()
            : ((d.byteOffset += m), (d.byteLength -= m)),
          (e._queueTotalSize -= m),
          De(e, m, t),
          (l -= m));
      }
      return (
        u === !1 &&
          (C(e._queueTotalSize === 0, "queue must be empty"),
          C(t.bytesFilled > 0),
          C(t.bytesFilled < t.elementSize)),
        u
      );
    }
    function De(e, t, n) {
      (C(e._pendingPullIntos.length === 0 || e._pendingPullIntos[0] === n),
        $e(e),
        (n.bytesFilled += t));
    }
    function xe(e) {
      (C(e._controlledReadableStream._state === "readable"),
        e._queueTotalSize === 0 && e._closeRequested === !0
          ? j(e._controlledReadableStream)
          : Re(e));
    }
    function $e(e) {
      e._byobRequest !== void 0 &&
        ((e._byobRequest._associatedReadableByteStreamController = void 0),
        (e._byobRequest._view = void 0),
        (e._byobRequest = void 0));
    }
    function Pe(e) {
      for (C(e._closeRequested === !1); e._pendingPullIntos.length > 0; ) {
        if (e._queueTotalSize === 0) return;
        var t = e._pendingPullIntos[0];
        Te(e, t) === !0 && (Fe(e), Ee(e._controlledReadableStream, t));
      }
    }
    function Ne(e, t) {
      var r = e._controlledReadableStream,
        o = 1;
      t.constructor !== DataView && (o = t.constructor.BYTES_PER_ELEMENT);
      var a = t.constructor,
        i = {
          buffer: t.buffer,
          byteOffset: t.byteOffset,
          byteLength: t.byteLength,
          bytesFilled: 0,
          elementSize: o,
          ctor: a,
          readerType: "byob",
        };
      if (e._pendingPullIntos.length > 0)
        return ((i.buffer = p(i.buffer)), e._pendingPullIntos.push(i), H(r));
      if (r._state === "closed") {
        var l = new t.constructor(i.buffer, i.byteOffset, 0);
        return n("MaybeNativePromise").resolve(u(l, !0));
      }
      if (e._queueTotalSize > 0) {
        if (Te(e, i) === !0) {
          var s = ke(i);
          return (xe(e), n("MaybeNativePromise").resolve(u(s, !1)));
        }
        if (e._closeRequested === !0) {
          var c = new TypeError(
            "Insufficient bytes to fill elements in the given buffer",
          );
          return (qe(e, c), n("MaybeNativePromise").reject(c));
        }
      }
      ((i.buffer = p(i.buffer)), e._pendingPullIntos.push(i));
      var d = H(r);
      return (Re(e), d);
    }
    function Me(e, t) {
      ((t.buffer = p(t.buffer)),
        C(t.bytesFilled === 0, "bytesFilled must be 0"));
      var n = e._controlledReadableStream;
      if (Z(n) === !0)
        for (; Y(n) > 0; ) {
          var r = Fe(e);
          Ee(n, r);
        }
    }
    function we(e, t, n) {
      if (n.bytesFilled + t > n.byteLength)
        throw new RangeError("bytesWritten out of range");
      if ((De(e, t, n), !(n.bytesFilled < n.elementSize))) {
        Fe(e);
        var r = n.bytesFilled % n.elementSize;
        if (r > 0) {
          var o = n.byteOffset + n.bytesFilled,
            a = n.buffer.slice(o - r, o);
          Ie(e, a, 0, a.byteLength);
        }
        ((n.buffer = p(n.buffer)),
          (n.bytesFilled -= r),
          Ee(e._controlledReadableStream, n),
          Pe(e));
      }
    }
    function Ae(e, t) {
      var n = e._pendingPullIntos[0],
        r = e._controlledReadableStream;
      if (r._state === "closed") {
        if (t !== 0)
          throw new TypeError(
            "bytesWritten must be 0 when calling respond() on a closed stream",
          );
        Me(e, n);
      } else (C(r._state === "readable"), we(e, t, n));
    }
    function Fe(e) {
      var t = e._pendingPullIntos.shift();
      return ($e(e), t);
    }
    function Oe(e) {
      var t = e._controlledReadableStream;
      return t._state !== "readable" ||
        e._closeRequested === !0 ||
        e._started === !1
        ? !1
        : (ee(t) === !0 && J(t) > 0) || (Z(t) === !0 && Y(t) > 0) || Ue(e) > 0;
    }
    function Be(e) {
      var t = e._controlledReadableStream;
      if (
        (C(e._closeRequested === !1),
        C(t._state === "readable"),
        e._queueTotalSize > 0)
      ) {
        e._closeRequested = !0;
        return;
      }
      if (e._pendingPullIntos.length > 0) {
        var n = e._pendingPullIntos[0];
        if (n.bytesFilled > 0) {
          var r = new TypeError(
            "Insufficient bytes to fill elements in the given buffer",
          );
          throw (qe(e, r), r);
        }
      }
      j(t);
    }
    function We(e, t) {
      var n = e._controlledReadableStream;
      (C(e._closeRequested === !1), C(n._state === "readable"));
      var r = t.buffer,
        o = t.byteOffset,
        a = t.byteLength,
        i = p(r);
      if (ee(n) === !0)
        if (J(n) === 0) Ie(e, i, o, a);
        else {
          C(e._queue.length === 0);
          var l = new Uint8Array(i, o, a);
          X(n, l, !1);
        }
      else
        Z(n) === !0
          ? (Ie(e, i, o, a), Pe(e))
          : (C(B(n) === !1, "stream must not be locked"), Ie(e, i, o, a));
    }
    function qe(e, t) {
      var n = e._controlledReadableStream;
      (C(n._state === "readable"), Le(e), R(e), K(n, t));
    }
    function Ue(e) {
      var t = e._controlledReadableStream,
        n = t._state;
      return n === "errored"
        ? null
        : n === "closed"
          ? 0
          : e._strategyHWM - e._queueTotalSize;
    }
    function Ve(e, t) {
      if (((t = Number(t)), c(t) === !1))
        throw new RangeError("bytesWritten must be a finite");
      (C(e._pendingPullIntos.length > 0), Ae(e, t));
    }
    function He(e, t) {
      C(e._pendingPullIntos.length > 0);
      var n = e._pendingPullIntos[0];
      if (n.byteOffset + n.bytesFilled !== t.byteOffset)
        throw new RangeError(
          "The region specified by view does not match byobRequest",
        );
      if (n.byteLength !== t.byteLength)
        throw new RangeError(
          "The buffer of view has different capacity than byobRequest",
        );
      ((n.buffer = t.buffer), Ae(e, t.byteLength));
    }
    function Ge(e) {
      return new TypeError(
        "ReadableStream.prototype." +
          e +
          " can only be used on a ReadableStream",
      );
    }
    function ze(e) {
      return new TypeError("Cannot " + e + " a stream using a released reader");
    }
    function je(e) {
      return new TypeError(
        "ReadableStreamDefaultReader.prototype." +
          e +
          " can only be used on a ReadableStreamDefaultReader",
      );
    }
    function Ke(e) {
      e._closedPromise = new (n("MaybeNativePromise"))(function (t, n) {
        ((e._closedPromise_resolve = t), (e._closedPromise_reject = n));
      });
    }
    function Qe(e, t) {
      ((e._closedPromise = n("MaybeNativePromise").reject(t)),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0));
    }
    function Xe(e) {
      ((e._closedPromise = n("MaybeNativePromise").resolve(void 0)),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0));
    }
    function Ye(e, t) {
      (C(e._closedPromise_resolve !== void 0),
        C(e._closedPromise_reject !== void 0),
        e._closedPromise_reject(t),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0));
    }
    function Je(e, t) {
      (C(e._closedPromise_resolve === void 0),
        C(e._closedPromise_reject === void 0),
        (e._closedPromise = n("MaybeNativePromise").reject(t)));
    }
    function Ze(e) {
      (C(e._closedPromise_resolve !== void 0),
        C(e._closedPromise_reject !== void 0),
        e._closedPromise_resolve(void 0),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0));
    }
    function et(e) {
      return new TypeError(
        "ReadableStreamBYOBReader.prototype." +
          e +
          " can only be used on a ReadableStreamBYOBReader",
      );
    }
    function tt(e) {
      return new TypeError(
        "ReadableStreamDefaultController.prototype." +
          e +
          " can only be used on a ReadableStreamDefaultController",
      );
    }
    function nt(e) {
      return new TypeError(
        "ReadableStreamBYOBRequest.prototype." +
          e +
          " can only be used on a ReadableStreamBYOBRequest",
      );
    }
    function rt(e) {
      return new TypeError(
        "ReadableByteStreamController.prototype." +
          e +
          " can only be used on a ReadableByteStreamController",
      );
    }
    function ot(e) {
      try {
        n("MaybeNativePromise").prototype.then.call(e, void 0, function () {});
      } catch (e) {}
    }
  },
  null,
);
