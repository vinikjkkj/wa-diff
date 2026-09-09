__d(
  "WAWebWindowsHybridBridge.v2636",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2636",
    "WAWebWindowsHybridBridgeAbProps.v2636",
    "WAWebWindowsHybridBridgeAdv.v2636",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2636",
    "WAWebWindowsHybridBridgeConnection.v2636",
    "WAWebWindowsHybridBridgeContacts.v2636",
    "WAWebWindowsHybridBridgeDebugFeatures.v2636",
    "WAWebWindowsHybridBridgeLinksPreview.v2636",
    "WAWebWindowsHybridBridgeMediaFiles.v2636",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2636",
    "WAWebWindowsHybridBridgeMetaConfig.v2636",
    "WAWebWindowsHybridBridgeNativeAppState.v2636",
    "WAWebWindowsHybridBridgeOds.v2636",
    "WAWebWindowsHybridBridgePictures.v2636",
    "WAWebWindowsHybridBridgePreferences.v2636",
    "WAWebWindowsHybridBridgeRateTheApp.v2636",
    "WAWebWindowsHybridBridgeRingtone.v2636",
    "WAWebWindowsHybridBridgeScalingControl.v2636",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2636",
    "WAWebWindowsHybridBridgeSharesheet.v2636",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2636",
    "WAWebWindowsHybridBridgeTouchpadFix.v2636",
    "WAWebWindowsHybridBridgeVoip.v2636",
    "WAWebWindowsHybridBridgeWam.v2636",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2636",
          ).WindowsHybridBridgeAbProps_v2636)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2636",
          ).WindowsHybridBridgeWam_v2636)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2636",
          ).WindowsHybridBridgePreferences_v2636)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2636",
          ).WindowsHybridBridgeScalingControl_v2636)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2636",
          ).WindowsHybridBridgeOds_v2636)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2636",
          ).WindowsHybridBridgePictures_v2636)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2636",
            ).WindowsHybridBridgeDebugFeatures_v2636)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2636",
          ).VoipWinRTBridge_v2636)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2636",
          ).WAWebWindowsHybridBridgeRateTheApp_v2636)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2636",
          ).WindowsHybridBridgeConnection_v2636)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2636",
          ).WindowsHybridBridgeTouchpadFix_v2636)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2636",
          ).WindowsHybridBridgeLinksPreview_v2636)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2636",
            ).WindowsHybridBridgeContacts_v2636)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2636",
            ).WindowsHybridBridgeContacts_v2636)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2636",
          ).WAWebWindowsHybridBridgeMediaFiles_v2636)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2636",
          ).WAWebWindowsHybridBridgeSharesheet_v2636)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2636",
          ).WindowsHybridAppActivationBridge_v2636)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2636",
          ).WindowsHybridBridgeNativeAppState_v2636)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2636",
          ).WindowsHybridBridgeSystemIntegrations_v2636)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2636",
          ).WindowsHybridBridgeBrowserExtensions_v2636)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2636",
          ).WindowsHybridBridgeSeamlessMigration_v2636)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2636",
          ).WindowsHybridBridgeMediaTranscoder_v2636)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2636",
          ).WindowsHybridBridgeAdv_v2636)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2636",
          ).WindowsHybridBridgeRingtone_v2636)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2636",
          ).WindowsHybridBridgeMetaConfig_v2636)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2636 = e;
  },
  98,
);
