# Data Table - Responsive <table> values
# 2019.1.17


# Settings

table
    .has-data-titles                 — attr [data-title] will shown on mobile
    .is-perfect                      — avoit mobile transformation
    data-table-type="1str,2num,3txt" — content type for columns (5 max)
td
    .is-string/.is-number = content type alias


# Example
```html


    <table class="data-table has-data-titles" data-table-type="1str,2num,3txt">
        <caption>
            <h2>Has markup for data-title</h2>
        </caption>
        <thead>
            <tr>
                <th>Provider</th>
                <th>Games</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th data-title="Provider">
                    Microgaming
                </th>
                <td data-title="Games">
                    590
                </td>
                <td data-title="Description with long value">
                    The game is devoted to the Mighty Scandinavian god Thor, which gives out different symbols, such as Scatter Ram, to help a player win prizes. The option of additional gambling game is also available.
                </td>
            </tr>
        </tbody>
    </table>


```
