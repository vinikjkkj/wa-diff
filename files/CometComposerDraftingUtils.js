__d(
  "CometComposerDraftingUtils",
  [
    "fbt",
    "ComposerMediaFileUploader",
    "FBLogger",
    "LexicalText",
    "MWPActor.react",
    "Promise",
    "ReactDOM",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "abTestData",
        "attachmentArea",
        "copyrightPreCheckMetadata",
        "editorRef",
        "editorState",
        "featureDefinitionsGating",
        "lexicalEditor",
        "mediaUploadStatuses",
        "onCloseReelsComposer",
        "onCloseUnderlyingDialog",
        "placeholderTextOverride",
        "submitText",
        "videoComposerData",
      ],
      u = ["currentSelectedVideoFrame", "generatedThumbnails", "thumbnailFile"],
      c = ["onRemove"],
      d,
      m = "comet_composer_drafts",
      p = "reel_draft",
      _ = "post_draft",
      f = 1,
      g = "draft_content",
      h = 12096e5;
    function y() {
      return (
        !o("MWPActor.react").isAPPlus() && !o("MWPActor.react").isPromode()
      );
    }
    function C(e) {
      return (
        Object.prototype.hasOwnProperty.call(
          e,
          "serializedLexicalEditorState",
        ) || Object.prototype.hasOwnProperty.call(e, "draftedPostText")
      );
    }
    function b(e) {
      r("FBLogger")("comet_composer").mustfix(
        "Experienced error during post draft retrieval: " + e.toString(),
      );
    }
    function v(e) {
      r("FBLogger")("comet_composer").mustfix(
        "Experienced error during post draft save: " + e.toString(),
      );
    }
    function S(e) {
      r("FBLogger")("comet_composer").mustfix(
        "Experienced error during post draft deletion: " + e.toString(),
      );
    }
    function R(e, t, o) {
      return new (d || (d = n("Promise")))(function (n, a) {
        if (indexedDB == null) {
          a(r("err")("IndexedDB is not available"));
          return;
        }
        var i = indexedDB.open(m, f);
        ((i.onupgradeneeded = function (e) {
          var t = e.target.result,
            n = t.createObjectStore(p, { keyPath: "id" });
          n.createIndex(g, [g], { unique: !1 });
          var r = t.createObjectStore(_, { keyPath: "id" });
          r.createIndex(g, [g], { unique: !1 });
        }),
          (i.onerror = function () {
            (v(i.error), a(i.error));
          }),
          (i.onsuccess = function (i) {
            var l = i.target.result;
            try {
              var s = l.transaction(o, "readwrite"),
                u = s.objectStore(o),
                c = u.put({ draftViewState: e, id: t, timestamp: Date.now() });
              ((s.oncomplete = function () {
                (l.close(), n(!0));
              }),
                (s.onerror = function () {
                  (l.close(), v(c.error), a(c.error));
                }));
            } catch (e) {
              l.close();
              var d = r("getErrorSafe")(e);
              (v(d), a(d));
            }
          }));
      });
    }
    function L(e, t) {
      return new (d || (d = n("Promise")))(function (n, o) {
        if (indexedDB == null) {
          o(r("err")("IndexedDB is not available"));
          return;
        }
        var a = indexedDB.open(m, f);
        ((a.onerror = function (e) {
          o(e);
        }),
          (a.onupgradeneeded = function (e) {
            var t = e.target.result,
              n = t.createObjectStore(p, { keyPath: "id" });
            n.createIndex(g, [g], { unique: !1 });
            var r = t.createObjectStore(_, { keyPath: "id" });
            r.createIndex(g, [g], { unique: !1 });
          }),
          (a.onsuccess = function (r) {
            var a = r.target.result;
            try {
              var i = a.transaction(t, "readonly"),
                l = i.objectStore(t),
                s = l.get(e);
              ((i.oncomplete = function () {
                a.close();
                var r = s.result,
                  o =
                    typeof r == "object" &&
                    r != null &&
                    "timestamp" in r &&
                    typeof r.timestamp == "number"
                      ? r.timestamp
                      : null;
                if (o != null && Date.now() - o > h)
                  E(e, t)
                    .then(function () {
                      return n(null);
                    })
                    .catch(function (e) {
                      S(e);
                    });
                else {
                  var i = null;
                  (typeof r == "object" &&
                    r != null &&
                    "draftViewState" in r &&
                    (i = r.draftViewState),
                    n(i));
                }
              }),
                (i.onerror = function (e) {
                  (a.close(), o(e));
                }));
            } catch (e) {
              (a.close(),
                e instanceof Error && e.name === "NotFoundError"
                  ? (b(e),
                    k()
                      .then(function () {
                        return n(null);
                      })
                      .catch(function (e) {
                        o(e);
                      }))
                  : o(e));
            }
          }));
      });
    }
    function E(e, t) {
      return new (d || (d = n("Promise")))(function (n, o) {
        if (indexedDB == null) {
          o(r("err")("IndexedDB is not available"));
          return;
        }
        var a = indexedDB.open(m, f);
        ((a.onsuccess = function (a) {
          var i = a.target.result;
          try {
            var l = i.transaction(t, "readwrite"),
              s = l.objectStore(t).delete(e);
            ((l.oncomplete = function () {
              (i.close(), n(!0));
            }),
              (l.onerror = function () {
                (i.close(), S(s.error), o(s.error));
              }));
          } catch (e) {
            i.close();
            var u = r("getErrorSafe")(e);
            (S(u), o(u));
          }
        }),
          (a.onerror = function () {
            (S(a.error), o(a.error));
          }));
      });
    }
    function k() {
      return new (d || (d = n("Promise")))(function (e, t) {
        if (indexedDB == null) {
          t(r("err")("IndexedDB is not available"));
          return;
        }
        var n = indexedDB.deleteDatabase(m);
        ((n.onsuccess = function () {
          e(!0);
        }),
          (n.onerror = function () {
            t(n.error);
          }));
      });
    }
    function I(e, t, a, i) {
      var l = r("ComposerMediaFileUploader").getInstance(t);
      i == null || i();
      var s = [];
      if (e.mediaUploadStatuses)
        for (var u in e.mediaUploadStatuses)
          s.push(e.mediaUploadStatuses[u].onFileComplete);
      else return (d || (d = n("Promise"))).resolve();
      if (s.length > 0 && l != null) {
        var c = function (t) {
          o("ReactDOM").flushSync(function () {
            return a({
              draftState: "PREEXISTING",
              entID: t.entID,
              imageURL: t.attachmentType === "PHOTO" ? t.imageURL : void 0,
              takenTime: t.attachmentType === "PHOTO" ? t.takenTime : void 0,
              type: "MEDIA_UPLOAD_SUCCESSFUL",
              uploadID: t.uploadID,
            });
          });
        };
        return (
          l.successObserver.subscribe(c),
          (d || (d = n("Promise")))
            .all(s)
            .then(function () {
              return (d || (d = n("Promise"))).resolve();
            })
            .catch(function (e) {
              var t;
              return (
                r("FBLogger")("comet_composer").mustfix(
                  "Media upload failed during draft save",
                  "Error: " +
                    ((t = e == null ? void 0 : e.message) != null
                      ? t
                      : "Unknown error"),
                ),
                (d || (d = n("Promise"))).reject(e)
              );
            })
            .finally(function () {
              l.successObserver.unsubscribe(c);
            })
        );
      } else return (d || (d = n("Promise"))).resolve();
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          if (e instanceof File || e instanceof Blob) return e;
          if (
            typeof e == "object" &&
            e != null &&
            "getData" in e &&
            typeof e.getData == "function"
          )
            try {
              var t = yield e.getData();
              return t;
            } catch (e) {
              return (
                r("FBLogger")("comet_composer").warn(
                  "Failed to serialize thumbnail file",
                  e,
                ),
                null
              );
            }
          return null;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r, o, a) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m, p) {
            var _,
              f,
              g = (_ = t.lexicalEditor) == null ? void 0 : _.getEditorState(),
              h = g == null ? void 0 : g.toJSON(),
              y = t.abTestData,
              C = t.attachmentArea,
              b = t.copyrightPreCheckMetadata,
              v = t.editorRef,
              S = t.editorState,
              L = t.featureDefinitionsGating,
              E = t.lexicalEditor,
              k = t.mediaUploadStatuses,
              I = t.onCloseReelsComposer,
              D = t.onCloseUnderlyingDialog,
              x = t.placeholderTextOverride,
              $ = t.submitText,
              P = t.videoComposerData,
              N = babelHelpers.objectWithoutPropertiesLoose(t, e),
              M =
                E == null || (f = E.getEditorState()) == null
                  ? void 0
                  : f.read(o("LexicalText").$rootTextContent),
              w = null;
            t.mediaAttachments != null &&
              (w = yield (d || (d = n("Promise"))).all(
                t.mediaAttachments.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (e.fileType === "VIDEO") {
                          var t = e.videoAttachmentMetadata;
                          if (t != null) {
                            var n = t.currentSelectedVideoFrame,
                              r = t.generatedThumbnails,
                              o = t.thumbnailFile,
                              a = babelHelpers.objectWithoutPropertiesLoose(
                                t,
                                u,
                              ),
                              i = yield T(o);
                            return babelHelpers.extends({}, e, {
                              videoAttachmentMetadata: babelHelpers.extends(
                                {},
                                a,
                                { thumbnailFile: i },
                              ),
                            });
                          }
                        }
                        return e;
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ));
            var A;
            t.byoaAudioTracks != null &&
              (A = t.byoaAudioTracks.map(function (e) {
                var t = e.description.getEditorState(),
                  n = t.toJSON();
                return {
                  file: e.file,
                  handle: e.handle,
                  key: e.key,
                  langCode: e.langCode,
                  serializedDescription: n,
                };
              }));
            var F = C != null ? C : {},
              O = F.onRemove,
              B = babelHelpers.objectWithoutPropertiesLoose(F, c),
              W = babelHelpers.extends(
                {},
                N,
                { attachmentArea: B, draftedPostText: M },
                w != null && { mediaAttachments: w },
                { serializedAudioTracks: A, serializedLexicalEditorState: h },
              );
            R(W, m, p)
              .then(function () {
                (a != null && a(),
                  l == null || l(),
                  i == null || i({ ignoreIsSavingFlag: !0 }));
              })
              .catch(function (e) {
                (r("FBLogger")("comet_composer").mustfix(e),
                  l == null ||
                    l(
                      r("err")(
                        s
                          ._(
                            /*BTDS*/ "Sorry, something went wrong. Try again later.",
                          )
                          .toString(),
                      ),
                    ));
              });
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return e.map(function (e) {
        var t = e;
        if (
          (e.fileType === "VIDEO" &&
            e.file != null &&
            (t = babelHelpers.extends({}, e, {
              fileObjectURL: URL.createObjectURL(e.file),
            })),
          t.fileType === "VIDEO" && t.videoAttachmentMetadata != null)
        ) {
          var n = t.videoAttachmentMetadata,
            r = babelHelpers.extends({}, n);
          if (
            n.thumbnailPreviewURL != null &&
            n.thumbnailFile != null &&
            n.thumbnailFile instanceof File
          ) {
            var o = URL.createObjectURL(n.thumbnailFile);
            ((r.thumbnailPreviewURL = o), (r.customURL = o));
          }
          t = babelHelpers.extends({}, t, { videoAttachmentMetadata: r });
        }
        return t;
      });
    }
    ((l.isFriendsAndFamilyUser = y),
      (l.viewStateContainsDraftData = C),
      (l.logDraftRetrievalError = b),
      (l.getDraftFromIndexedDB = L),
      (l.deleteDraftFromIndexedDB = E),
      (l.clearAllDraftsFromIndexedDB = k),
      (l.processMediaUpload = I),
      (l.createSerializedDraft = x),
      (l.createNewObjectURLsForVideosAndThumbnails = P));
  },
  226,
);
