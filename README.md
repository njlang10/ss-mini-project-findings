# SS Group Findings Dashboard BE

This hosts the results of the grouped_findings and raw_findings tables. To do so, it uses:
- Express to server to the web
- Sequelize to make JS models from DB tables
- SQLite to store DBs in memory

## API:
/groupedFindings
- Will return all results for the grouped_findings tables
##
/rawFindings
- Request Options: {id: number}
- Returns the raw_findings for the specified group_finding_id if provided, otherwise all raw_findings


## Testing
`yarn test`
