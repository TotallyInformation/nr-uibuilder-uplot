// @ts-nocheck
/* eslint-disable no-irregular-whitespace */
/** Define typedefs for linting and JSDoc/ts checks - does not actually contain live code
 *
 * Copyright (c) 2023-2023 Julian Knight (Totally Information)
 * https://it.knightnet.org.uk, https://github.com/TotallyInformation/node-red-contrib-uibuilder
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

/** editorRED
 * typedef {object} editorRED The Node-RED core object available to a custom node's .html file
 *
 */

/** Node-RED runtimeSettings - See settings.js for static settings.
 * @typedef {object} runtimeSettings Static and Dynamic settings for Node-RED runtime
 *
 * @property {string} uiPort The port used by Node-RED (default=1880)
 * @property {string} uiHost The host IP used by Node-RED (default=0.0.0.0)
 * @property {string} userDir The userDir folder
 * @property {string} httpNodeRoot Optional base URL. All user url's will be under this. Default empty string.
 * @property {object} FunctionGlobalContext Add values, Functions, packages to the Global context variable store.
 * @property {Function} mqttReconnectTime : [Getter/Setter],
 * @property {Function} serialReconnectTime : [Getter/Setter],
 * @property {Function} debugMaxLength : [Getter/Setter],
 * @property {Function} debugUseColors : [Getter/Setter],
 * @property {string} flowFile : [Getter/Setter],
 * @property {Function} flowFilePretty : [Getter/Setter],
 * @property {string} credentialSecret : [Getter/Setter],
 * @property {string} httpAdminRoot : [Getter/Setter],
 * @property {string} httpStatic : [Getter/Setter],
 * @property {Function} adminAuth : [Getter/Setter],
 * @property {Function} httpNodeMiddleware : [Getter/Setter],
 * @property {Function} httpAdminMiddleware : [Getter/Setter],
 * @property {Function} httpServerOptions : [Getter/Setter],
 * @property {Function} webSocketNodeVerifyClient : [Getter/Setter],
 * @property {Function} exportGlobalContextKeys : [Getter/Setter],
 * @property {Function} contextStorage : [Getter/Setter],
 * @property {Function} editorTheme : [Getter/Setter],
 * @property {string} settingsFile : [Getter/Setter],
 * @property {string} httpRoot : [Getter/Setter],
 * @property {Function} disableEditor : [Getter/Setter],
 * @property {Function} httpAdminAuth : [Getter/Setter],
 * @property {Function} httpNodeAuth : [Getter/Setter],
 * @property {object|Function} [https] If present, https will be used for ExpressJS servers.
 *
 * @property {object} [uibuilder] Optional uibuilder specific Node-RED settings
 * @property {number} [uibuilder.port] Port number if uib is using its own ExpressJS instance
 * @property {string} [uibuilder.uibRoot] Folder name that will hold all uib runtime and instance folders
 * @property {('http'|'https')} [uibuilder.customType] Connection type - only if using custom ExpressJS instance
 * @property {object|Function} [uibuilder.https] Override https server settings (key/cert) - if not specified, uses main NR https prop
 * @property {object} [uibuilder.serverOptions] Optional ExpressJS server options for uib custom server
 * @property {object} [uibuilder.socketOptions] Override Socket.IO options if desired. See https://socket.io/docs/v4/server-options/
 * @property {boolean} [uibuilder.instanceApiAllowed] Allow instance-level custom API's to be loaded. Could be a security issue so it is controlled in settings.js
 *
 * @property {string} coreNodesDir Folder containing Node-RED core nodes
 * @property {string} version Node-RED version
 *
 * @property {object} logging Controls the type and amount of logging output
 * @property {object} logging.console Controls output levels and types to the console log
 * @property {string} logging.console.level What level of output? (fatal, error, warn, info, debug, trace)
 * @property {boolean} logging.console.metrics Should metrics also be shown?
 * @property {boolean} logging.console.audit Should audit also be shown?
 *
 * @property {Function} get Get dynamic settings. NB: entries in settings.js are read-only and shouldn't be read using RED.settings.get, that is only for settings that can change in-flight.
 * @property {Function} set Set dynamic settings
 * @property {Function} delete .
 * @property {Function} available .
 *
 * @property {Function} registerNodeSettings : [Function: registerNodeSettings],
 * @property {Function} exportNodeSettings : [Function: exportNodeSettings],
 * @property {Function} enableNodeSettings : [Function: enableNodeSettings],
 * @property {Function} disableNodeSettings : [Function: disableNodeSettings],
 *
 * @property {Function} getUserSettings : [Function: getUserSettings],
 * @property {Function} setUserSettings : [Function: setUserSettings],
 */

/** Node-RED runtimeLogging
 * @typedef {object} runtimeLogging Logging. Levels that are output to the Node-RED log are controlled by the logging.console.level setting in settings.js
 * @property {Function} fatal Lvel 0. Lowest level, things that have broken Node-RED only.
 * @property {Function} error Level 1. Copy is sent to Editor debug panel as well as error log.
 * @property {Function} warn Level 2.
 * @property {Function} info Level 3.
 * @property {Function} debug Level 4.
 * @property {Function} trace Level 5. Very verbose output. Should tell the operator everything that is going on.
 * @property {Function} metric Log metrics (timings)
 * @property {Function} audit Audit log
 * @property {Function} addHandler Adds a log handler
 * @property {Function} removeHandler Removes a log handler
 */

/** Node-RED runtimeNodes
 * @typedef {object} runtimeNodes Gives access to other active nodes in the flows.
 * @property {Function} registerType Register a new type of node to Node-RED.
 * @property {Function} createNode Create a node instance (called from within registerType Function).
 * @property {Function} getNode Get a reference to another node instance in the current flows. Can then access its properties.
 * @property {Function} eachNode .
 * @property {Function} addCredentials .
 * @property {Function} getCredentials .
 * @property {Function} deleteCredentials .
 */

/** runtimeRED
 * @typedef {object} runtimeRED The core Node-RED runtime object
 * @property {expressApp} httpAdmin Reference to the ExpressJS app for Node-RED Admin including the Editor
 * @property {expressApp} httpNode Reference to the ExpressJS app for Node-RED user-facing nodes including http-in/-out and Dashboard
 * @property {object} server Node.js http(s) Server object
 * @property {runtimeLogging} log Logging.
 * @property {runtimeNodes} nodes Gives access to other active nodes in the flows.
 * @property {runtimeSettings} settings Static and Dynamic settings for Node-RED runtime
 *
 * @property {Function} version Get the Node-RED version
 * @property {Function} require : [Function: requireModule],
 * @property {Function} comms : { publish: [Function: publish] },
 * @property {Function} library : { register: [Function: register] },
 * @property {Function} auth : { needsPermission: [Function: needsPermission] },
 *
 * @property {object} events Event handler object
 * @property {Function} events.on Event Listener Function. Types: 'nodes-started', 'nodes-stopped'
 * @property {Function} events.once .
 * @property {Function} events.addListener .
 *
 * @property {object} hooks .
 * @property {Function} hooks.has .
 * @property {Function} hooks.clear .
 * @property {Function} hooks.add .
 * @property {Function} hooks.remove .
 * @property {Function} hooks.trigger .
 *
 * @property {object} util .
 * @property {Function} util.encodeobject : [Function: encodeobject],
 * @property {Function} util.ensurestring : [Function: ensurestring],
 * @property {Function} util.ensureBuffer : [Function: ensureBuffer],
 * @property {Function} util.cloneMessage : [Function: cloneMessage],
 * @property {Function} util.compareobjects : [Function: compareobjects],
 * @property {Function} util.generateId : [Function: generateId],
 * @property {Function} util.getMessageProperty : [Function: getMessageProperty],
 * @property {Function} util.setMessageProperty : [Function: setMessageProperty],
 * @property {Function} util.getobjectProperty : [Function: getobjectProperty],
 * @property {Function} util.setobjectProperty : [Function: setobjectProperty],
 * @property {Function} util.evaluateNodeProperty : [Function: evaluateNodeProperty],
 * @property {Function} util.normalisePropertyExpression : [Function: normalisePropertyExpression],
 * @property {Function} util.normaliseNodeTypeName : [Function: normaliseNodeTypeName],
 * @property {Function} util.prepareJSONataExpression : [Function: prepareJSONataExpression],
 * @property {Function} util.evaluateJSONataExpression : [Function: evaluateJSONataExpression],
 * @property {Function} util.parseContextStore : [Function: parseContextStore]
 */

/** runtimeNode
 * @typedef {object} runtimeNode Local copy of the node instance config + other info
 * @property {Function} send Send a Node-RED msg to an output port
 * @property {Function} done Dummy done Function for pre-Node-RED 1.0 servers
 * @property {Function} context get/set context data. Also .flow and .global contexts
 * @property {Function} on Event listeners for the node instance ('input', 'close')
 * @property {Function} removeListener Event handling
 * @property {Function} log General log output, Does not show in the Editor's debug panel
 * @property {Function} warn Warning log output, also logs to the Editor's debug panel
 * @property {Function} error Error log output, also logs to the Editor's debug panel
 * @property {Function} trace Trace level log output
 * @property {Function} debug Debug level log output
 * @property {Function} status Show a status message under the node in the Editor
 * @property {object=} credentials Optional secured credentials
 * @property {object=} name Internal.
 * @property {object=} id Internal. uid of node instance.
 * @property {object=} type Internal. Type of node instance.
 * @property {object=} z Internal. uid of ???
 * @property {[Array<string>]=} wires Internal. Array of Array of strings. The wires attached to this node instance (uid's)
 */

/** runtimeNodeConfig
 * @typedef {object} runtimeNodeConfig Configuration of node instance. Will also have Editor panel's defined variables as properties.
 * @property {object=} id Internal. uid of node instance.
 * @property {object=} type Internal. Type of node instance.
 * @property {object=} x Internal
 * @property {object=} y Internal
 * @property {object=} z Internal
 * @property {object=} wires Internal. The wires attached to this node instance (uid's)
 */

/** uibUplot
 * @typedef {object} uibUplot Local copy of the node instance config + other info
 * @property {string}  name only used for labelling the node in the flow
 * @property {*} _ui Placeholder for the msg._ui descriptors
 *   topic: string;
 *   elementtype: string;
 *   parent: string;
 *   parentSource: string;
 *   parentSourceType: string;
 *   elementid: string;
 *   elementId: string;
 *   elementIdSource: string;
 *   elementIdSourceType: string;
 *   heading: string;
 *   headingSource: string;
 *   headingSourceType: string;
 *   headingLevel: string;
 *   position: string|number;
 *   positionSource: string|number;
 *   positionSourceType: string;
 *   confData: object;
 */

/** uibElNode (Element Node)
 * @typedef {{
 *   name: string;
 *   topic: string;
 *   elementtype: string;
 *   parent: string;
 *   parentSource: string;
 *   parentSourceType: string;
 *   elementid: string;
 *   elementId: string;
 *   elementIdSource: string;
 *   elementIdSourceType: string;
 *   heading: string;
 *   headingSource: string;
 *   headingSourceType: string;
 *   headingLevel: string;
 *   position: string|number;
 *   positionSource: string|number;
 *   positionSourceType: string;
 *   confData: object;
 *   _ui: any;
 * }} uibElNode
 */

/** uibUpdNode (Update Node)
 * @typedef {{
 *   name: string;
 *   topic: string;
 *   mode: 'update'|'delete'|'remove'|'msg.mode';
 *   modeSource: string;
 *   modeSourceType: string;
 *   cssSelector: string;
 *   cssSelectorSource: string;
 *   cssSelectorType: string;
 *   cssSelectorSourceType: string;
 *   slotContent: string;
 *   slotSourceProp: string;
 *   slotContentSource: string;
 *   slotContentSourceType: string;
 *   slotSourcePropType: string;
 *   attribs: object;
 *   attribsSource: string;
 *   attribsSourceType: string;
 *   slotPropMarkdown: boolean;
 *   _ui: any;
 * }} uibUpdNode
 */

module.exports = {}
