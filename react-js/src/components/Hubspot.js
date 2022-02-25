const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ apiKey: '444ff1d3-1f2a-405f-842e-0b7724cb6760' })

// const filter = { propertyName: 'createdate', operator: 'GTE', value: Date.now() - 30 * 60000 }
// const filterGroup = { filters: [filter] }
// const sort = JSON.stringify({ propertyName: 'createdate', direction: 'DESCENDING' })
// const query = ''
// const properties = ['ignitesalesrep']
// const limit = 100
// const after = 0
const filter = {}
const filterGroup = { filters: [filter] }
const sort = JSON.stringify({ propertyName: 'ignitesalesrep', direction: 'DESCENDING' })
const query = 'test'
const properties = ['createdate', 'firstname', 'lastname']
const limit = 10
const after = 0

const publicObjectSearchRequest = {
    // filterGroups: [filterGroup],
    sorts: [sort],
    // query,
    // properties,
    limit,
    after,
}

async function start() {
    const result = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)
    // const allContacts = await hubspotClient.crm.contacts.getAll()
    console.log(JSON.stringify(result))
}
start();
