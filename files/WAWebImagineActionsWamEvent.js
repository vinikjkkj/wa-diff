__d(
  "WAWebImagineActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineActionSource",
    "WAWebWamEnumImagineActionSourceSubtype",
    "WAWebWamEnumImagineActionTarget",
    "WAWebWamEnumImagineActionThreadType",
    "WAWebWamEnumImagineMediaType",
    "WAWebWamEnumImplementationType",
    "WAWebWamEnumTextModalityType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ImagineActions: [
            5620,
            {
              aiSessionId: [14, e.TYPES.STRING],
              imagineAction: [1, o("WAWebWamEnumImagineAction").IMAGINE_ACTION],
              imagineActionDuration: [8, e.TYPES.TIMER],
              imagineActionSource: [
                3,
                o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE,
              ],
              imagineActionSourceSubtype: [
                13,
                o("WAWebWamEnumImagineActionSourceSubtype")
                  .IMAGINE_ACTION_SOURCE_SUBTYPE,
              ],
              imagineActionTarget: [
                4,
                o("WAWebWamEnumImagineActionTarget").IMAGINE_ACTION_TARGET,
              ],
              imagineActionThreadType: [
                5,
                o("WAWebWamEnumImagineActionThreadType")
                  .IMAGINE_ACTION_THREAD_TYPE,
              ],
              imagineMediaType: [
                12,
                o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE,
              ],
              implementationType: [
                11,
                o("WAWebWamEnumImplementationType").IMPLEMENTATION_TYPE,
              ],
              isCancelled: [6, e.TYPES.BOOLEAN],
              isSent: [7, e.TYPES.BOOLEAN],
              maxIndex: [9, e.TYPES.INTEGER],
              metaAiConversationThreadId: [16, e.TYPES.STRING],
              selectedImageIndex: [10, e.TYPES.INTEGER],
              textModality: [
                17,
                o("WAWebWamEnumTextModalityType").TEXT_MODALITY_TYPE,
              ],
              threadSessionId: [15, e.TYPES.STRING],
              unifiedSessionId: [18, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ImagineActions: [] },
      );
    l.ImagineActionsWamEvent = s;
  },
  98,
);
